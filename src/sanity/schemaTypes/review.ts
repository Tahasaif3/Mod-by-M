import { defineType } from "sanity";

export const review = defineType({
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    {
      name: "productId",
      type: "reference",
      to: [{ type: "product" }],
      title: "Product",
    },
    {
      name: "name",
      type: "string",
      title: "Reviewer Name",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      name: "comment",
      type: "text",
      title: "Review Comment",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      options: {
        defaultValue: new Date().toISOString(),
      },
    },
  ],
});
