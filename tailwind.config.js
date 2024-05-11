/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryClr: '#00378C',
        secondary: '#6A5ACD',
      },
    },
    fontFamily:{
      serifFont :["Roboto Serif", "serif"]
    },
   
  },
  plugins: [],
};
