/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gameBg: '#350330',     // Fondo principal
        gameCard: '#282727',   // Tarjetas/secciones
        gameText: '#FFFFFF',   // Texto
        gameAccent: '#A30000', // Acentos
        gameGlow: '#A1A0CB',   // Glow
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
