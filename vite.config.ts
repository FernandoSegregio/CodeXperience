import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({

  plugins: [react(), svgr(), VitePWA({
    registerType: 'autoUpdate',

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      id: '/',
      name: 'CodeXperience',
      short_name: 'CodeXperience',
      description: 'O melhor evento para programadores na Zona da Mata',
      orientation: "portrait",
      theme_color: '#000000',
      background_color: '#ffffff',
      display: 'standalone',
      "display_override": ["standalone", "minimal-ui"],
      start_url: '/',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/image");
          },
          handler: "CacheFirst",
          options: {
            cacheName: "runtime-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: false,
      type: 'module',
    },
  })],
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@utils': path.resolve('src/utils'),
    },
  },
});
