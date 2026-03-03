// src/data/series.js
export const series = [
  {
    id: "cherry",
    title: "Cherry",
    description: "",
    artworks: [
      {
        id: "001",
        title: "Cherry",
        dimensions: "",
        medium: "",
        year: "2026",
        price: "350",
        sold: false,
        image: "/img/shop/cherry_300.jpeg",
        description: ""
      },

    ]
  },
  {
    id: "love_your_self",
    title: "Love your self",
    description: "",
    artworks: [
      {
        id: "002",
        title: "Love your self",
        dimensions: "48 x 60 inches",
        medium: "",
        year: "2026",
        price: "300",
        sold: false,
        image: "public/img/shop/love_your_self_300.jpeg",
        description: ""
      },

    ]
  },
  {
    id: "Spread_Love",
    title: "Spread Love",
    description: "",
    artworks: [
      {
        id: "003",
        title: "Spread Love",
        dimensions: "",
        medium: "",
        year: "2026",
        price: "1200",
        sold: false,
        image: "public/img/shop/spread_love_1200.jpeg",
        description: ""
      },
    ]
  },
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
