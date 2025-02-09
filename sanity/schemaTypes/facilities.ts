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
      description: 'Header for the facilities page',
    }),
    defineField({
      name: 'textBlocks',
      title: 'Text Blocks',
      type: 'array',
      of: [{type: 'text'}],
      description: 'Two text blocks for the facilities page',
      validation: (Rule) =>
        Rule.required().min(1).max(2).error('Please provide at least 1 text block'),
    }),
    defineField({
      name: 'carouselImages',
      title: 'Carousel Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            defineField({
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for this image',
            }),
          ],
        },
      ],
      description: 'Add images to be used in the carousel',
      validation: (Rule) =>
        Rule.required().min(2).max(10).error('Please provide at least 2 images'),
    }),
  ],
})
