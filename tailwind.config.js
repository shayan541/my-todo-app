/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '43':'43px',
        '45':'45px'
      },
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
