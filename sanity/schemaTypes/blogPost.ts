import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'Here you can write the title of the blog post.',
    }),
    defineField({
      name: 'textBlocks',
      title: 'Text Content 1',
      type: 'array',
      of: [{type: 'text'}],
      description: 'Text blocks for a blogpost',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            defineField({
              name: 'altText',
              title: 'Alternative text',
              type: 'string',
              description: 'Alternative text for this image',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'textBlocks2',
      title: 'Text Content 2',
      type: 'array',
      of: [{type: 'text'}],
      description: 'More Text blocks for a blogpost',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'The date and time of your blogpost',
    }),
  ],
})
