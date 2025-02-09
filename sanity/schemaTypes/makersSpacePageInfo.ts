import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'makersSpacePageInfo',
  title: 'Makers Space Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutHeader',
      title: 'About Header',
      type: 'string',
      description: 'Here you can edit About Title',
    }),
    defineField({
      name: 'aboutText',
      title: 'About text',
      type: 'text',
      description: 'Here you can edit the subtext for About Title',
    }),
    defineField({
      name: 'subHeader',
      title: 'Sub Header',
      type: 'string',
      description: 'Here you can edit the Sub Header',
    }),
    defineField({
      name: 'subTitleText',
      title: 'Sub Title text',
      type: 'text',
      description: 'Here you can edit the text for Sub header',
    }),
    defineField({
      name: 'subTitleText2',
      title: 'Sub Title text nr 2',
      type: 'text',
      description: 'Here you can edit the other text for Sub header',
    }),
    defineField({
      name: 'image',
      title: 'Image for Makers Space',
      type: 'image',
      description: 'Here you can change the main image for Makers Space',
      fields: [
        defineField({
          name: 'altText',
          title: 'Alternative text for image',
          type: 'string',
          description: 'Here you can change the alternative text of image',
        }),
      ],
    }),
  ],
})
