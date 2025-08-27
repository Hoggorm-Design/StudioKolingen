import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'frontPageImageCarousel',
  title: 'Front Page Image Carousel',
  type: 'document',
  fields: [{
    title: 'Image Carousel',
    name: 'carouselImages',
    type: 'array',
    of: [{
        type: 'image',
        options: {
                        hotspot: true,
                    },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for this image',
            }),
        ],
        
    }],
  }],
  preview: {
    prepare() {
      return {title: 'Front page image carousel'}
    },
  },
  
})
