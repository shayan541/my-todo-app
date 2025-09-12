/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gold:{
          100:"#d3c7aa",
          200:"#b29b66"
        }
      }
    },
  },
  plugins: [],
}
