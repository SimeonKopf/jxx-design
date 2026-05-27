import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// WICHTIG: Falls die Live-Domain abweicht, hier anpassen – davon hängen
// Sitemap-, Canonical- und schema.org-URLs ab.
export default defineConfig({
  site: 'https://jxx-design.com',
  integrations: [tailwind(), sitemap()],
});
