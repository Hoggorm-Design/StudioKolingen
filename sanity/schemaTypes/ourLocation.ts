import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ourLocation',
  title: 'Our Location',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: "Here you can edit the header of the 'Our location' section.",
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Here you can write the textual content of the location.',
    }),
  ],
})
