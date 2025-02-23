/* eslint-env node */
const {createClient} = require('@sanity/client')

const token = process.env.SANITY_TOKEN

if (!token) {
  console.error('SANITY_TOKEN environment variable is not set.')
  process.exit(1)
}

const client = createClient({
  projectId: 'mcc4dfqm',
  dataset: 'production',
  useCdn: false,
  token,
  apiVersion: '2023-01-01',
})

/**
 * Helper: Given an image object (from any old field),
 * returns a formatted image object with asset ref and altText.
 */
const getImageObject = (image) => {
  if (image && image.asset && typeof image.asset._ref === 'string') {
    // Support either "altText" or "imageText" (as some old docs might use "imageText")
    return {asset: {_ref: image.asset._ref}, altText: image.altText || image.imageText || ''}
  } else {
    console.log('No valid image found:', image)
    return null
  }
}

/**
 * BLOG POSTS MIGRATION
 * Old fields: regularImages, carouselImages
 * New field: images (merged)
 */
const migrateBlogPosts = async () => {
  console.log('Starting migration for blogPost...')

  const posts = await client.fetch(`
    *[_type == "blogPost" && (defined(regularImages) || defined(carouselImages))]{
      _id,
      regularImages,
      carouselImages
    }
  `)

  for (const post of posts) {
    const regular = post.regularImages || []
    const carousel = post.carouselImages || []
    const mergedImages = [...regular, ...carousel].map(getImageObject).filter((img) => img !== null)

    await client
      .patch(post._id)
      .set({images: mergedImages})
      .unset(['regularImages', 'carouselImages'])
      .commit()
    console.log(`Migrated blog post: ${post._id}`)
  }
  console.log('BlogPost migration completed!')
}

/**
 * MAKERS SPACE YEARS MIGRATION
 * Old fields: carouselImages, regularImages
 * New fields: mainImage, images
 * The first image in the merged array becomes mainImage; the rest go into images.
 */
const migrateMakersSpaceYears = async () => {
  console.log('Starting migration for makersSpaceYears...')

  const docs = await client.fetch(`
    *[_type == "makersSpaceYears" && (defined(regularImages) || defined(carouselImages))]{
      _id,
      regularImages,
      carouselImages
    }
  `)

  for (const doc of docs) {
    const regular = doc.regularImages || []
    const carousel = doc.carouselImages || []
    const mergedImages = [...regular, ...carousel].map(getImageObject).filter((img) => img !== null)

    let mainImage = null
    let images = mergedImages
    if (mergedImages.length > 0) {
      mainImage = mergedImages[0]
      images = mergedImages.slice(1)
    }

    await client
      .patch(doc._id)
      .set({mainImage, images})
      .unset(['regularImages', 'carouselImages'])
      .commit()
    console.log(`Migrated makersSpaceYears document: ${doc._id}`)
  }
  console.log('MakersSpaceYears migration completed!')
}

/**
 * FACILITIES MIGRATION
 * Old field: carouselImages
 * New fields: mainImage, images
 * The first image becomes mainImage and the remaining become images.
 */
const migrateFacilities = async () => {
  console.log('Starting migration for facilities...')

  const docs = await client.fetch(`
    *[_type == "facilities" && defined(carouselImages)]{
      _id,
      carouselImages
    }
  `)

  for (const doc of docs) {
    const oldImages = doc.carouselImages || []
    const mergedImages = oldImages.map(getImageObject).filter((img) => img !== null)

    let mainImage = null
    let images = mergedImages
    if (mergedImages.length > 0) {
      mainImage = mergedImages[0]
      images = mergedImages.slice(1)
    }

    await client.patch(doc._id).set({mainImage, images}).unset(['carouselImages']).commit()
    console.log(`Migrated facilities document: ${doc._id}`)
  }
  console.log('Facilities migration completed!')
}

/**
 * Run all migrations sequentially.
 */
const runMigrations = async () => {
  await migrateBlogPosts()
  await migrateMakersSpaceYears()
  await migrateFacilities()
  console.log('All migrations completed!')
}

runMigrations().catch((error) => {
  console.error('Migration error:', error)
  process.exit(1)
})
