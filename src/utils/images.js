// Löst die in series.js hinterlegten Werk-Dateinamen zu lokalen Bild-Assets auf,
// damit Astros <Image> sie zu optimiertem WebP verarbeiten kann.
// Die Glob-Keys sind projekt-absolut, also in allen Komponenten identisch.
const shopImages = import.meta.glob('/src/assets/shop/*.{jpeg,jpg,png,JPG,JPEG,PNG}', {
  eager: true,
});

export function getArtworkImage(filename) {
  const entry = shopImages[`/src/assets/shop/${filename}`];
  return entry ? entry.default : undefined;
}
