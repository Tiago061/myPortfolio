import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 458f0988ef2635127ffcd5d65bbe9c674691c24d
})
