import { defineField, defineType } from "sanity";

export default defineType({
    name: "carousel",
    title: "Carousel",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Provide an image for the image carousel"
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
            description: "Provide a short description of the image for accessibility.",
        }),
    ],
});
