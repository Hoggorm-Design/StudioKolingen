import { defineField, defineType } from "sanity";

export default defineType({
    name: "navbar",
    title: "Navigation bar",
    type: "document",
    fields: [
        defineField({
            name: "header1",
            title: "Header1",
            type: "string",
            description: "Here you can write the title of the first heading of the navigation bar"
        }),
        defineField({
            name: "header2",
            title: "Header2",
            type: "string",
            description: "Here you can write the title of the second heading of the navigation bar"
        }),
        defineField({
            name: "header3",
            title: "Header3",
            type: "string",
            description: "Here you can write the title of the third heading of the navigation bar"
        }),
    ],
});
