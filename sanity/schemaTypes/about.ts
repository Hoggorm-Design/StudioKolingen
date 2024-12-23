import {defineField, defineType} from "sanity";

export default defineType({
    name: "about",
    title: "About Us",
    type: "document",
    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
            description:"Here you can write the title of the blog post."
        }),
        defineField({
            name: "text1",
            title: "Text 1",
            type: "text",
            description: "Here you can write the first textual content of the blogpost.",
        }),
        defineField({
            name: "text2",
            title: "Text 2",
            type: "text",
            description: "Here you can write the second textual content of the blogpost.",
        }),
        defineField({
            name: "text3",
            title: "Text 3",
            type: "text",
            description: "Here you can write the third textual content of the blogpost.",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Providde an image for the about us section."
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
            description: "Provide a short description of the image for accessibility.",
        }),

    ],
});
