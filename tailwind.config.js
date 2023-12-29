/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        k2d:['K2D', 'sans-serif'],
        K2D:['K2D', 'sans-serif'],
        kelly:['Kelly Slab', 'sans-serif']
      }
    },
  },
  plugins: [],
}

