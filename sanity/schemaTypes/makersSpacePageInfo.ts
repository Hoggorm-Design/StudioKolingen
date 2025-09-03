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
          name: 'makersSpaceYears',
          title: 'Makers Space Years',
          type: 'array',
          of: [{
            type: 'reference',
            title: 'Makers Space Years',
            to: [
              {type: 'makersSpaceYears'  }
            ]
        }],
      })
    ],
})

