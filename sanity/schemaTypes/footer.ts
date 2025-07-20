import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                type: 'image',
                options: {
                        hotspot: true,
                    },
                fields: [
                    defineField({
                    name: 'altText',
                    title: 'Alt Text',
                    type: 'string',
                    
                    description: 'Alternative text for this image',
                    }),
                ],
                },
            ],
            }),
        defineField({
            name: 'header',
            title: 'Header',
            type: 'string',
            description: "Here you can provide the header for the footer section section",
        }),

        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
            description: "Here you can add the address"
        }),


        defineField({
            name: 'contact1',
            title: 'Contact 1',
            type: 'string',
            description: "Here you can add the name of the first contact person"
        }),

        defineField({
            name: 'phonenumber1',
            title: 'Phonenumber 1',
            type: 'string',
            description: "Here you can add the phonenumber of the first contact person"
        }),
        defineField({
            name: 'contact2',
            title: 'Contact 2',
            type: 'string',
            description: "Here you can add the name of the second contact person"
        }),

        defineField({
            name: 'phonenumber2',
            title: 'Phonenumber 2',
            type: 'string',
            description: "Here you can add the phonenumber of the second contact person"
        }),


    ],
});
