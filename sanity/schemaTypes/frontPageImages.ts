import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'frontPageImages',
  title: 'Front Page Images',
  type: 'document',
  fields: [
    {
      name: 'featuredPosts',
      title: 'Featured Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: "Featured posts",
          to: [
                {type: 'blogPost' },
                {type: 'makersSpaceYears'},
          ]
                
        }
      ],
      validation: Rule => Rule.max(3).error('You can only select up to 3 blog posts'), 
      description: 'Select up to 3 blog posts to display on the homepage'
    }
  ],
  preview: {
    prepare() {
      return {title: 'Front page display'}
    },
  },
})