import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://audiotheft.com',
  integrations: [tailwind(), sitemap()],
  security: {
    checkOrigin: true
  },
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
});