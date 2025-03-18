import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { robots } from 'vite-plugin-robots';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  build: {
    sourcemap: true,
    // terserOptions:
    chunkSizeWarningLimit: 1600,
  },
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://ibrahim-portfolio-jet.vercel.app/',
      basePath: 'portfolio',
    }),
    robots(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
