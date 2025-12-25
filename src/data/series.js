// src/data/series.js - Fetches from Sanity CMS with fallback to backup data
import { sanityClient, urlFor } from '../lib/sanity.ts';

// Check if Sanity is properly configured
function isSanityConfigured() {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  return projectId &&
         projectId !== 'your-project-id' &&
         projectId !== 'placeholder-project-id' &&
         projectId !== '';
}

// Import backup data as fallback
async function getBackupData() {
  try {
    const backup = await import('./series.backup.js');
    return backup.default || backup.series || [];
  } catch (error) {
    console.warn('Could not load backup data:', error);
    return [];
  }
}

// Fetch all series with their artworks from Sanity
export async function getSeries() {
  // If Sanity is not configured, use backup data
  if (!isSanityConfigured()) {
    console.log('Sanity not configured, using backup data');
    return await getBackupData();
  }

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

    // If no data from Sanity, use backup
    if (!data || data.length === 0) {
      console.log('No data from Sanity, using backup data');
      return await getBackupData();
    }

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
    // Fallback to backup data if Sanity fetch fails
    console.log('Sanity fetch failed, using backup data');
    return await getBackupData();
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
