import { defineType, defineField } from 'sanity';

export const authorType = defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Biography',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Profile Picture',
      options: {
        hotspot: true,
      },
    }),
  ],
});