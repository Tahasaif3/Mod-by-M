import { defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required"),
    }),
    ({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name", // Replace "name" with the field you want to base the slug on
        maxLength: 96, // Set a maximum length for the slug
      },
      validation: (Rule) => Rule.required(), // Make the slug field required
    })
,    
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Allow hotspot selection for better cropping
      },
      description: "Upload an image of the product.",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.max(150).warning("Keep the description under 150 characters."),
    }),
    defineField({
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
      validation: (Rule) =>
        Rule.min(0)
          .max(100)
          .warning("Discount must be between 0 and 100."),
    }),
    defineField({
      name: "isFeaturedProduct",
      title: "Is Featured Product",
      type: "boolean",
    }),
    defineField({
      name: "isLatestProduct",
      title: "Is Latest Product",
      type: "boolean",
    }),
    defineField({
      name: "isTrending",
      title: "Is Trending Product",
      type: "boolean",
    }),
    defineField({
      name: "stockLevel",
      title: "Stock Level",
      type: "number",
      validation: (Rule) =>
        Rule.min(0).error("Stock level must be a positive number."),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Chair", value: "Chair" },
          { title: "Sofa", value: "Sofa" },
        ],
      },
      validation: (Rule) => Rule.required().error("Category is required"),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `$${selection.subtitle}`,
        media: selection.media,
      };
    },
  },
});
