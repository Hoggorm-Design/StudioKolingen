import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'facilities',
  title: 'Facilities',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'Here you can write the title of the facility page.',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Here you can write the first textual content of the facilities page.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Provide the main image for the Page.',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Provide a short description of the image for accessibility.',
    }),
    defineField({
      name: 'text2',
      title: 'Text 2',
      type: 'text',
      description: 'Here you can write the first textual content of the facilities page.',
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Provide the main image for the Page.',
    }),
    defineField({
      name: 'alt2',
      title: 'Alt Text',
      type: 'string',
      description: 'Provide a short description of the image for accessibility.',
    }),
  ],
})
