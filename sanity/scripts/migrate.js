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

const getImageObject = (image, imageText) => {
  if (image && image.asset && typeof image.asset._ref === 'string') {
    return {asset: {_ref: image.asset._ref}, altText: imageText}
  } else {
    console.log('No valid image found:', image, imageText)
  }
  return null
}

const migrateBlogPosts = async () => {
  console.log('Starting migration...')

  const oldPosts = await client.fetch(`
    *[_type == "blogPost"]{
      _id, 
      header, 
      text1, text2, text3, text4, text5, text6,
      image1 { asset->{_ref}, imageText1 },
      image2 { asset->{_ref}, imageText2 },
      image3 { asset->{_ref}, imageText3 },
      image4 { asset->{_ref}, imageText4 },
      image5 { asset->{_ref}, imageText5 },
      image6 { asset->{_ref}, imageText6 },
      image7 { asset->{_ref}, imageText7 },
      image8 { asset->{_ref}, imageText8 },
      image9 { asset->{_ref}, imageText9 },
      image10 { asset->{_ref}, imageText10 },
      publishedAt
    }
  `)

  const updates = oldPosts.map((post) => ({
    _id: post._id,
    _type: 'blogPost',
    header: post.header,
    textBlocks: [post.text1, post.text2, post.text3, post.text4, post.text5, post.text6].filter(
      Boolean,
    ),
    regularImages: [
      getImageObject(post.image1, post.imageText1),
      getImageObject(post.image2, post.imageText2),
      getImageObject(post.image3, post.imageText3),
      getImageObject(post.image4, post.imageText4),
      getImageObject(post.image5, post.imageText5),
      getImageObject(post.image6, post.imageText6),
      getImageObject(post.image7, post.imageText7),
      getImageObject(post.image8, post.imageText8),
      getImageObject(post.image9, post.imageText9),
      getImageObject(post.image10, post.imageText10),
    ].filter((img) => img !== null),
    publishedAt: post.publishedAt,
  }))

  for (const update of updates) {
    await client.createOrReplace(update)
    console.log(`Updated blog post: ${update._id}`)
  }

  console.log('Migration completed!')
}

migrateBlogPosts().catch((error) => {
  console.error('Migration error:', error)
})
