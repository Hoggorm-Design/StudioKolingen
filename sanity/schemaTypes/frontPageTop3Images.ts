import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'frontPageTop3Images',
  title: 'Front Page Top 3 Images',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: "Here you can provide the header for the 'Contact' section",
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Provide the sub image for the Page.',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Provide a short description of the image for accessibility.',
    }),
    defineField({
      name: 'header2',
      title: 'Header 2',
      type: 'string',
      description: "Here you can provide the header for the 'Contact' section",
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Provide the sub image for the Page.',
    }),
    defineField({
      name: 'alt2',
      title: 'Alt Text',
      type: 'string',
      description: 'Provide a short description of the image for accessibility.',
    }),
    defineField({
      name: 'header3',
      title: 'Header 3',
      type: 'string',
      description: "Here you can provide the header for the 'Contact' section",
    }),
    defineField({
      name: 'image3',
      title: 'Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Provide the sub image for the Page.',
    }),
    defineField({
      name: 'alt3',
      title: 'Alt Text',
      type: 'string',
      description: 'Provide a short description of the image for accessibility.',
    }),
  ],
})
