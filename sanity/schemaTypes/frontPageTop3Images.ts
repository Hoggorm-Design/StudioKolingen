import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imagePageLink',
  title: 'Front Page Image Links',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'Here you can provide the header for the page',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Provide the image for the Page.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Provide a short description of the image for accessibility.',
        }),
      ],
    }),
  ],
})
