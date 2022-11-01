/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : '#FF3636',
        cartcolor : '#1a73e8',
        navbg : '#14161a',
        titlecolor : '#ecdc55',
      }
    },
  },
  plugins: [],
}

