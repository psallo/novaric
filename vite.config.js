import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: set `base` to your repository name, e.g. '/novaric/'
// If deploying to a custom domain (e.g. novaric.io), change base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/novaric/',
})
