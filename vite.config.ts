import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base '/' works for custom domain (akshayms.site) and username.github.io
export default defineConfig({
  plugins: [react()],
  base: '/',
})
