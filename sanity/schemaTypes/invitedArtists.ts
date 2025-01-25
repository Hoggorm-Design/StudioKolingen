import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'invitedArtists',
  title: 'Invited Artists',
  type: 'document',
  fields: [
    defineField({
      name: 'artistName',
      title: 'Artist name',
      type: 'string',
      description: 'Here you can edit the name of artist with location in ()',
    }),
    defineField({
      name: 'artistLink',
      title: 'Artist link',
      type: 'string',
      description: 'Here you can add the link for artist',
    }),
  ],
})
