import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
