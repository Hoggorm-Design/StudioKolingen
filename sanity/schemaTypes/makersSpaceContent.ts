import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'makersSpaceContent',
  title: 'Makers Space Content',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'Header for the content',
    }),
    defineField({
      name: 'textBlocks',
      title: 'Text Blocks',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'links',
      title: 'Text Blocks (Links)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Link Name',
              type: 'string',
              description: 'Text that will be displayed for the link',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'The actual link',
            }),
          ],
        },
      ],
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
    }),
    defineField({
      name: 'regularImages',
      title: 'Regular Images',
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
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'The date and time of your makerspace content post',
    }),
  ],
})
