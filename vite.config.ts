import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
import { configDefaults } from 'vitest/config';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/scholar-work-progress/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Scholar Work Progress',
        short_name: 'SW Progress',
        description: 'Task evolution monitoring',
        theme_color: '#4a044e',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        ...configDefaults.exclude,
        '**/e2e/**',
        '**/node_modules/**',
        '**/postcss.config.js',
        '**/tailwind.config.js',
        '**/vite.config.ts',
        '**/tsconfig.json',
        '**/*.d.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/main.tsx',
      ]
    },
  }
})
