import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        press: ['"Press Start 2P"', 'cursive'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        nosifer: ['"Nosifer"', 'cursive'],
        creepster: ['"Creepster"', 'cursive'],
      },
    },
  },
  plugins: [tailwindcss(),react()],
})
