import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dynamicImport from 'vite-plugin-dynamic-import'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    tailwindcss(),
    dynamicImport(),
    visualizer({
      filename: './dist/stats.html', // Output file in the dist folder
      open: true, // Automatically open it in the browser after build
    }),
  ],
})

