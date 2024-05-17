import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@crew': './../assets/crew/',
      '@destination': './../assets/destination/',
    },
  },
  plugins: [react()],
})
