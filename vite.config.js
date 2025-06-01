import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Ajoute ceci pour que Render serve index.html sur n'importe quelle route
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true
    }
  }
})
