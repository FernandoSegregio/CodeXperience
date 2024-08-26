/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'], 
      },
      keyframes: {
        kick: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(-11deg)' },
        },
      },
      animation: {
        kick: 'kick 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}