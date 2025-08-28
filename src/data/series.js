// src/data/series.js
export const series = [
  {
    id: "urban-dreams",
    title: "Urban Dreams Series",
    description: "Exploring the vibrant energy of city life through bold colors and dynamic composition, capturing the essence of modern urban culture.",
    artworks: [
      {
        id: "001",
        title: "Urban Dreams",
        dimensions: "36 x 48 inches",
        medium: "spray paint on canvas",
        year: "2024",
        price: "2.800",
        sold: false,
        image: "/img/e68bfe80-964b-441e-93ce-21b4345d3f2d.jpg",
        description: "A vibrant exploration of city life and urban energy, capturing the pulse of modern street culture through bold colors and dynamic composition."
      },
      {
        id: "002",
        title: "City Pulse",
        dimensions: "24 x 30 inches",
        medium: "acrylic and spray paint",
        year: "2024",
        price: "2.200",
        sold: true,
        image: "/img/6bfbede9-a505-4f28-94b0-9f8410e92fed.jpg",
        description: "An intimate piece reflecting the heartbeat of metropolitan life, where traditional techniques meet contemporary urban expression."
      },
      {
        id: "003",
        title: "Neon Nights",
        dimensions: "30 x 40 inches",
        medium: "mixed media on canvas",
        year: "2024",
        price: "3.200",
        sold: false,
        image: "/img/9503f430-2a20-4ea4-8ec3-53a035f177fc.jpg",
        description: "Inspired by the electric atmosphere of nighttime cityscapes, this piece glows with the energy of urban illumination."
      }
    ]
  },
  {
    id: "street-symphony",
    title: "Street Symphony Series",
    description: "A harmonious blend of urban imagery and musical rhythm, where street art meets classical composition in large-scale works.",
    artworks: [
      {
        id: "004",
        title: "Street Symphony",
        dimensions: "48 x 60 inches",
        medium: "spray paint and markers",
        year: "2024",
        price: "4.500",
        sold: false,
        image: "/img/portfolio-klein-1.jpg.jpg",
        description: "A large-scale composition that orchestrates multiple layers of urban imagery into a harmonious visual symphony."
      },
      {
        id: "005",
        title: "Electric Soul",
        dimensions: "20 x 24 inches",
        medium: "spray paint on wood",
        year: "2023",
        price: "1.800",
        sold: true,
        image: "/img/e68bfe80-964b-441e-93ce-21b4345d3f2d.jpg",
        description: "A more intimate work exploring the connection between human emotion and urban environment through textural experimentation."
      }
    ]
  },
  {
    id: "concrete-rebellion",
    title: "Concrete Rebellion Series",
    description: "Bold statements of artistic freedom and creative rebellion, examining the intersection of nature and urban development.",
    artworks: [
      {
        id: "006",
        title: "Concrete Jungle",
        dimensions: "36 x 36 inches",
        medium: "mixed media",
        year: "2024",
        price: "300",
        sold: false,
        image: "/img/PHOTO-2025-08-10-13-37-06.jpg",
        description: "Square format piece that examines the intersection of nature and urban development in contemporary society."
      },
      {
        id: "007",
        title: "Rebel Heart",
        dimensions: "28 x 35 inches",
        medium: "acrylic and spray paint",
        year: "2024",
        price: "2.500",
        sold: false,
        image: "/img/e68bfe80-964b-441e-93ce-21b4345d3f2d.jpg",
        description: "A bold statement piece that captures the spirit of creative rebellion and artistic freedom in urban culture."
      },
      {
        id: "008",
        title: "Underground Vibes",
        dimensions: "24 x 32 inches",
        medium: "spray paint on canvas",
        year: "2023",
        price: "2.100",
        sold: true,
        image: "/img/e68bfe80-964b-441e-93ce-21b4345d3f2d.jpg",
        description: "Drawing inspiration from subway culture and underground art movements, this piece celebrates grassroots creativity."
      }
    ]
  },
  {
    id: "color-revolution",
    title: "Color Revolution Series",
    description: "A celebration of color and form that challenges traditional boundaries between street art and fine art, featuring dynamic metropolitan compositions.",
    artworks: [
      {
        id: "009",
        title: "Metro Madness",
        dimensions: "40 x 50 inches",
        medium: "mixed media on canvas",
        year: "2024",
        price: "4.200",
        sold: false,
        image: "/img/e68bfe80-964b-441e-93ce-21b4345d3f2d.jpg",
        description: "A chaotic yet controlled composition reflecting the intense energy and movement of metropolitan transit systems."
      },
      {
        id: "010",
        title: "Color Revolution",
        dimensions: "32 x 40 inches",
        medium: "spray paint and acrylic",
        year: "2024",
        price: "3.600",
        sold: false,
        image: "/img/e68bfe80-964b-441e-93ce-21b4345d3f2d.jpg",
        description: "A celebration of color and form that challenges traditional boundaries between street art and fine art."
      }
    ]
  }
];

// Helper functions
export function getSeriesById(id) {
  return series.find(s => s.id === id);
}

export function getAllArtworks() {
  return series.flatMap(s => s.artworks);
}

// Make sure the default export works too
export default series;