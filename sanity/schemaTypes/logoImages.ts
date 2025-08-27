import { defineField, defineType } from "sanity";

export default defineType({
    name: 'logoImages',
    title: 'Logo images',
    type: 'document',
    fields: [
        defineField({
            name: 'footerLogo',
            title: 'Footer/Navbar image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Choose logo that will appear in navbar and footer'
        }),      
        defineField({
            name: 'mainLogo',
            title: 'Main Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Choose the main logo that will appear on the front page'

        })      
    ],
  preview: {
    prepare() {
      return {title: 'Logo images'}
    },
  },

})