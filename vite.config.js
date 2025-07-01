import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '34627b46-4e7a-452a-820f-41a17537046c-00-3dcskjikbqb6p.sisko.replit.dev'
    ]
  }
})