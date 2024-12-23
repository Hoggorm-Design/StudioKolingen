import { defineField, defineType } from "sanity";

export default defineType({
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
        defineField({
            name: "image1",
            title: "Image 1",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Provide an image for the image carousel"
        }),
        defineField({
            name: "alt1",
            title: "Alt Text 1",
            type: "string",
            description: "Provide a short description of the image 1 for accessibility.",
        }),
        defineField({
            name: "image2",
            title: "Image 2",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Provide an image for the image carousel"
        }),
        defineField({
            name: "alt2",
            title: "Alt Text 2",
            type: "string",
            description: "Provide a short description of the image 2 for accessibility.",
        }),
        defineField({
            name: "image3",
            title: "Image 3",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Provide an image for the image carousel"
        }),
        defineField({
            name: "alt3",
            title: "Alt Text 3",
            type: "string",
            description: "Provide a short description of the image 3 for accessibility.",
        }),
        defineField({
            name: "image4",
            title: "Image 4",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Provide an image for the image carousel"
        }),
        defineField({
            name: "alt4",
            title: "Alt Text 4",
            type: "string",
            description: "Provide a short description of the image 4 for accessibility.",
        }),
        defineField({
            name: "image5",
            title: "Image 5",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Provide an image for the image carousel"
        }),
        defineField({
            name: "alt5",
            title: "Alt Text 5",
            type: "string",
            description: "Provide a short description of the image5 for accessibility.",
        }),
    ],
});
