// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Make sure to import the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This 'resolve' section is what tells Vite about our '@' shortcut.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})