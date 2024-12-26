import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Location Link',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Here you can provide the url for the link',
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Add description of the link',
    }),
  ],
})
