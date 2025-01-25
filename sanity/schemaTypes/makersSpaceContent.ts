import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'makersSpaceContent',
  title: 'Makers Space Content',
  type: 'document',
  fields: [
    ...Array.from({length: 3}, (_, index) =>
      defineField({
        name: `text${index + 1}`,
        title: `Text ${index + 1}`,
        type: 'text',
        description: `Here you can edit text ${index + 1}`,
      }),
    ),
    ...Array.from({length: 10}, (_, index) => ({
      name: `image${index + 1}`,
      title: `Image ${index + 1}`,
      type: 'image',
      fields: [
        defineField({
          name: 'altText',
          title: 'Alt Text',
          type: 'string',
          description: `Alternative text for Image ${index + 1}`,
        }),
      ],
    })),
  ],
})
