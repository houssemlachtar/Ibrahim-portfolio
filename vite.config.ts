import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { robots } from 'vite-plugin-robots';
import VitePluginCopy from 'vite-plugin-copy'; // Import the plugin for copying files

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
  },
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://ibrahim-portfolio-jet.vercel.app',
      basePath: 'portfolio',
    }),
    robots({
      robotsTxt: 'robots.production.txt', // Specify the correct path to robots.production.txt
    }),
    VitePluginCopy({
      targets: [
        {
          src: 'robots.production.txt', // Path to your robots.production.txt
          dest: 'dist', // Copy it to the dist folder
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
