// src/data/series.js - Now fetches from Sanity CMS
import { sanityClient, urlFor } from '../lib/sanity.ts';

// Fetch all series with their artworks from Sanity
export async function getSeries() {
  const query = `
    *[_type == "series"] | order(order asc) {
      "id": seriesId.current,
      title,
      description,
      imagePosition,
      "artworks": artworks[]-> {
        "id": artworkId,
        title,
        dimensions,
        medium,
        year,
        price,
        sold,
        description,
        image,
        order
      } | order(order asc)
    }
  `;

  try {
    const data = await sanityClient.fetch(query);

    // Transform Sanity data to match your existing format
    return data.map(series => ({
      id: series.id,
      title: series.title,
      description: series.description,
      artworks: series.artworks.map(artwork => ({
        id: artwork.id,
        title: artwork.title,
        dimensions: artwork.dimensions,
        medium: artwork.medium,
        year: artwork.year,
        price: artwork.price,
        sold: artwork.sold,
        description: artwork.description,
        image: urlFor(artwork.image).width(800).quality(90).url(),
      }))
    }));
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    // Fallback to empty array if Sanity is not configured yet
    return [];
  }
}

// Helper function to get series by ID
export async function getSeriesById(id) {
  const allSeries = await getSeries();
  return allSeries.find(s => s.id === id);
}

// Helper function to get all artworks
export async function getAllArtworks() {
  const allSeries = await getSeries();
  return allSeries.flatMap(s => s.artworks);
}

// For backwards compatibility, export the series data
// This will be fetched at build time
export const series = await getSeries();

export default series;
