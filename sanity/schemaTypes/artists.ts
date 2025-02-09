import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artists',
  title: 'Artists',
  type: 'document',
  fields: [
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
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'The name of the artist.',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Here you can write the first textual content of the specific artist.',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      description: 'Provide an optional link for the blog post.',
      fields: [
        defineField({
          name: 'name',
          title: 'Link Name',
          type: 'string',
          description: 'The display name for the link.',
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          description: 'The actual link URL.',
        }),
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'The date and time of when artist information is published',
    }),
  ],
})
