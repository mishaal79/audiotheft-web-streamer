import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://audiotheft.com',
  integrations: [tailwind(), sitemap(), icon()],
  output: 'hybrid',
  security: {
    checkOrigin: true
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});