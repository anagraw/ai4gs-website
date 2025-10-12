import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai4gs-website/', // Replace 'ai4gs-website' with your repo name
})