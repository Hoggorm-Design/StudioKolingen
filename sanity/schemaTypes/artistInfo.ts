import {defineField, defineType} from "sanity";

export default defineType({
    name: "artistInfo",
    title: "Artist Information",
    type: "document",
    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
            description:"Here you can write the title of the artist page."
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
            description: "Here you can write the first textual content of the artist page.",
        }),

    ],
});