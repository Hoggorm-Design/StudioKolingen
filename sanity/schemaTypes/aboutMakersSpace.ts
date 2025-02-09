import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutMakersSpace',
  title: 'About Makers Space',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutHeader',
      title: 'About Header',
      type: 'string',
      description: 'Here you can edit About Title',
    }),
    defineField({
      name: 'aboutText',
      title: 'About text',
      type: 'text',
      description: 'Here you can edit the subtext for About Title',
    }),
  ],
})
