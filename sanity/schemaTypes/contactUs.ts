import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactUs',
  title: 'Contact Us',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: "Here you can provide the header for the 'Contact' section",
    }),
    defineField({
      name: 'mail',
      title: 'Mail',
      type: 'string',
      description: 'Here you can add the mail address',
    }),

    defineField({
      name: 'phonenumber',
      title: 'Phonenumber',
      type: 'string',
      description: 'Here you can add the phone number',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description:
        "Here you can add the address on the format 'Urbanusvägen 9, 739 93 Riddarhyttan'",
    }),
  ],
})
