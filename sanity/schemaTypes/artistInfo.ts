import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artistPageInfo',
  title: 'Artist Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'Here you can write the title of the artist page.',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Here you can write the first textual content of the artist page.',
    }),
    defineField({
      name: 'artists',
      title: 'Artists',
      type: 'array',
      of: [{
        type: 'reference',
        title: 'Artists',
        to: [
          {type: 'artists'  }
        ]
    }],
      

    })

  ],
})
