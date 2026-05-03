import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Bu ayar dosya değişikliklerini zorla kontrol etmesini sağlar
    }
  }
})