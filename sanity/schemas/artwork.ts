import { defineType } from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    {
      name: 'artworkId',
      title: 'Artwork ID',
      type: 'string',
      description: 'Unique ID like "001", "002", etc.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g., "36 x 48 inches"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description: 'e.g., "spray paint on canvas"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (EUR)',
      type: 'string',
      description: 'Enter price like "2.800" (with dot as separator)',
    },
    {
      name: 'sold',
      title: 'Sold',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order within the series (1, 2, 3...)',
      validation: Rule => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
      artworkId: 'artworkId',
      media: 'image',
      sold: 'sold',
    },
    prepare(selection) {
      const { title, artworkId, media, sold } = selection
      return {
        title: `#${artworkId} - ${title}`,
        subtitle: sold ? '🔴 SOLD' : '🟢 Available',
        media,
      }
    },
  },
})
