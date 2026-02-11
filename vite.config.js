import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/manijhaneswar/', // matches your GitHub repo name exactly
  plugins: [react(), tailwindcss()],
})
