import {defineField, defineType} from "sanity";

export default defineType({
    name: "mainImage",
    title: "Main Image",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Provide the main image for the Page."
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
            description: "Provide a short description of the image for accessibility.",
        }),
        defineField({
            name: "header",
            title: "Header",
            type: "string",
            description:"Here you can write the title of the page."
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
            description: "Here you can write the text beside the title.",
        }),
    ],
});
