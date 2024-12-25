import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navigation bar',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Provide an image of the logo for the navigation bar',
    }),
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Provide an alternative text for the image',
    }),
  ],
})
