import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',             // good default
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',      // default is fine
    emptyOutDir: true,
  },
})