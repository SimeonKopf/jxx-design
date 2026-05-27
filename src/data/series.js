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
        image: "cherry_300.jpeg",
        description: "Unikat"
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
        dimensions: "",
        medium: "",
        year: "2026",
        price: "300",
        sold: false,
        image: "love_your_self_300.jpeg",
        description: "Unikat"
      },

    ]
  },
  {
    id: "kitchen_party",
    title: "Pine cones",
    description: "",
    artworks: [
      {
        id: "003",
        title: "Pine Cones",
        dimensions: "",
        medium: "",
        year: "2024",
        price: "1500",
        sold: false,
        image: "kitchen_party.jpeg",
        description: "Dieses Bild entstand bei der Küchenparty von dem Hotel Ritter 2024. Und es handelt sich hierbei um ein Unikat"
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
