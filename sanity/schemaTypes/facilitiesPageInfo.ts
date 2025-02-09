import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'facilitiesPageInfo',
  title: 'Facilities Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'Here you can write the title of the facilities page.',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Here you can write the first textual content of the facilities page.',
    }),
  ],
})
