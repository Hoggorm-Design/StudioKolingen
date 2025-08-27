import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Location Link',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Here you can provide the URL for the link',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Provide an image associated with the link',
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Alt text for the image to improve accessibility',
    }),
    
  ],
})
