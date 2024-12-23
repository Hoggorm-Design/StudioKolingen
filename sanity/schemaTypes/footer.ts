import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Provide an image icon of the footer"
        }),
        defineField({
            name: "alt",
            title: "Alt Text ",
            type: "string",
            description: "Provide a short description of the image icon for accessibility.",
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
