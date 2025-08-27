import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ourLocation',
  title: 'Our Location',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: "Here you can edit the header of the 'Our location' section.",
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Here you can write the textual content of the location.',
    }),
    defineField({
      name: 'mapURL',
      title: 'Map URL',
      type: 'string',
      description: 'Here you can paste the URL for the map.',
    }),

    defineField({
      name:'locations',
      title: 'Locations',
      type:'array',
      of: [{
        type: 'reference',
        title: 'Location',
        to: [
          { type: 'link'}
        ]
      }]

    })

  ],
})
