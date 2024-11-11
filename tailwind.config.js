/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "vermelho": "#FF0E47FF",
        "azul": "#2055FF"
      },
      fontFamily:{
        "questrial":"questrial"
      }
    },
  },
  plugins: [],
}

