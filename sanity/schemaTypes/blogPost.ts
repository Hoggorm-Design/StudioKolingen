import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'Here you can write the title of the blog post.',
    }),
    ...Array.from({length: 6}, (_, i) =>
      defineField({
        name: `text${i + 1}`,
        title: `Text ${i + 1}`,
        type: 'text',
        description: `Write the content for text section ${i + 1}.`,
      }),
    ),
    ...Array.from({length: 10}, (_, i) => [
      defineField({
        name: `image${i + 1}`,
        title: `Image ${i + 1}`,
        type: 'image',
        options: {
          hotspot: true,
        },
        description: `Provide image ${i + 1} for the blog post.`,
      }),
      defineField({
        name: `imageText${i + 1}`,
        title: `Image Text ${i + 1}`,
        type: 'string',
        description: `Provide a description or caption for image ${i + 1}.`,
      }),
    ]).flat(),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Provide an optional link for the blog post.',
    }),
  ],
})
