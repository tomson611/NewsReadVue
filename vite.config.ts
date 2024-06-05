import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      svgoConfig: {
        plugins: ['removeDimensions', 'removeUselessStrokeAndFill', 'convertStyleToAttrs']
      }
    }),
    dynamicImport({
      filter(id) {
        if (id.includes('/node_modules/@infermedica')) {
          return true
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['infermedica/component-library']
  }
})
