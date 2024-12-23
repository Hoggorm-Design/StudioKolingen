import { defineField, defineType } from "sanity";

export default defineType({
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
            description:"Here you can write the title of the blog post."
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
            description: "Here you can write the textual content of the blogpost.",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description:"Providde an image for the blog post."
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
            description: "Provide a short description of the image for accessibility.",
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "url",
            description: "Provide an optional link for the blog post."
        }),
    ],
});
