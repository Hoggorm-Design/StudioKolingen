import {defineField, defineType} from "sanity";

export default defineType({
    name: "apartmentinfo",
    title: "Apartment Information",
    type: "document",
    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
            description:"Here you can write the title of the apartment page."
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
            description: "Here you can write the first textual content of the apartment page.",
        }),

    ],
});
