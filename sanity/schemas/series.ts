import { defineType } from 'sanity'

export default defineType({
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    {
      name: 'seriesId',
      title: 'Series ID',
      type: 'slug',
      description: 'URL-friendly ID like "urban-dreams"',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'artworks',
      title: 'Artworks',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
      description: 'Add artworks to this series. Order them by dragging.',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order on the homepage (1, 2, 3...)',
      validation: Rule => Rule.required().min(1),
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    },
  ],
  preview: {
    select: {
      title: 'title',
      artworkCount: 'artworks',
    },
    prepare(selection) {
      const { title, artworkCount } = selection
      const count = artworkCount ? artworkCount.length : 0
      return {
        title,
        subtitle: `${count} artwork${count !== 1 ? 's' : ''}`,
      }
    },
  },
})
