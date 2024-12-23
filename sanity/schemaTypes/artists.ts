import {defineField, defineType} from "sanity";

export default defineType({
    name: "artists",
    title: "Arttists",
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
            name: "text",
            title: "Text",
            type: "text",
            description: "Here you can write the first textual content of the specific artist.",
        }),
    ],
});
