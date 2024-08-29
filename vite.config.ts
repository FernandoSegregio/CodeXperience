import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import createCompressionPlugin from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: false,
    terserOptions: {
      compress: true,
      mangle: true,
    },
  },
  base: '/',
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: '/',
        name: 'CodeXperience',
        short_name: 'CodeXperience',
        description: 'O melhor evento para programadores na Zona da Mata',
        orientation: "portrait",
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        display_override: ["standalone", "minimal-ui"],
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
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webp}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin.includes('www.google.com'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-maps-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60 * 30 * 2, // até o evento
              },
            },
          },
          {
            urlPattern: ({ url }) => url.origin.includes('instagram.com'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'instagram-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 24 * 60 * 60, // 1 dia
              },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/assets"),
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/fonts"),
            handler: "CacheFirst",
            options: {
              cacheName: "font-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 365 * 24 * 60 * 60, // 1 ano
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) => /\.(?:css|js)$/.test(url.pathname),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: ({ url }) => url.origin.includes('your-api-url.com'),
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 10, 
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 24 * 60 * 60, // 1 dia
              },
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
    }),
    createCompressionPlugin({
      algorithm: 'brotliCompress',
      threshold: 2400,
    }),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@utils': path.resolve('src/utils'),
    },
  },
});
