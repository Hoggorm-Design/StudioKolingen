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
 * returns a formatted image object with asset ref and alt text.
 */
const getImageObject = (image, altText) => {
  if (image && image.asset && typeof image.asset._ref === 'string') {
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: image.asset._ref,
      },
      alt: altText || '',
    }
  } else {
    console.log('No valid image found:', image)
    return null
  }
}

/**
 * Top 3 images migration
 */
const migrateTop3Images = async () => {
  console.log('Starting migration for frontPageTop3Images...')

  try {
    // Fetch all documents of the old schema type
    const oldDocuments = await client.fetch(`*[_type == "frontPageTop3Images"]`)

    if (oldDocuments.length === 0) {
      console.log('No frontPageTop3Images documents found to migrate')
      return
    }

    console.log(`Found ${oldDocuments.length} frontPageTop3Images documents to migrate`)

    // For each old document, create 3 new documents
    for (const oldDoc of oldDocuments) {
      // Create three new documents, one for each image in the old document
      const newDocuments = []

      // First image
      if (oldDoc.image && oldDoc.image.asset) {
        const newDoc1 = {
          _type: 'imagePageLink',
          header: oldDoc.header || '',
          image: getImageObject(oldDoc.image, oldDoc.alt),
        }
        newDocuments.push(newDoc1)
      }

      // Second image
      if (oldDoc.image2 && oldDoc.image2.asset) {
        const newDoc2 = {
          _type: 'imagePageLink',
          header: oldDoc.header2 || '',
          image: getImageObject(oldDoc.image2, oldDoc.alt2),
        }
        newDocuments.push(newDoc2)
      }

      // Third image
      if (oldDoc.image3 && oldDoc.image3.asset) {
        const newDoc3 = {
          _type: 'imagePageLink',
          header: oldDoc.header3 || '',
          image: getImageObject(oldDoc.image3, oldDoc.alt3),
        }
        newDocuments.push(newDoc3)
      }

      // Create all the new documents
      for (const newDoc of newDocuments) {
        try {
          const result = await client.create(newDoc)
          console.log(`Created new imagePageLink document with ID: ${result._id}`)
        } catch (err) {
          console.error('Error creating new document:', err)
        }
      }

      // Optionally: Delete or archive the old document after successful migration
      // Uncomment this if you want to remove old documents

      // try {
      //   await client.d(oldDoc._id)
      //   console.log(`Deleted old document with ID: ${oldDoc._id}`)
      // } catch (err) {
      //   console.error(`Error deleting old document ${oldDoc._id}:`, err)
      // }
    }

    console.log('frontPageTop3Images migration completed')
  } catch (error) {
    console.error('Error during frontPageTop3Images migration:', error)
  }
}

/**
 * Run all migrations sequentially.
 */
const runMigrations = async () => {
  await migrateTop3Images()

  console.log('All migrations completed!')
}

runMigrations().catch((error) => {
  console.error('Migration error:', error)
  process.exit(1)
})
