import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prices',
  title: 'Prices',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'Here you can write the title of the blog post.',
    }),
    defineField({
      name: 'text',
      title: 'Text ',
      type: 'text',
      description: "Here you can write textual content of the 'prices' section.",
    }),

    defineField({
      name: 'onenight',
      title: 'nights: 1',
      type: 'text',
      description: 'Here you can edit the cost of 1 night.',
    }),
    defineField({
      name: 'oneweek',
      title: 'weeks: 1',
      type: 'text',
      description: 'Here you can edit how much it is going to cost for 1 week',
    }),
    defineField({
      name: 'twoweeks',
      title: 'weeks: 2',
      type: 'text',
      description: 'Here you can edit how much it is going to cost for 2 weeks',
    }),
    defineField({
      name: 'fourweeks',
      title: 'weeks: 4',
      type: 'text',
      description: 'Here you can edit how much it is going to cost for 4 weeks.',
    }),
    defineField({
      name: 'extraPerson',
      title: 'Extra person',
      type: 'text',
      description: 'Here you can edit how much it is going to cost for an extra person.',
    }),
    defineField({
      name: 'text2',
      title: 'Text ',
      type: 'text',
      description: "Here you can write textual content of the 'prices' section.",
    }),
  ],
})
