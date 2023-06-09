const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      wider: '.1em',
      widest: '.7em'
    },
    extend: {
      colors: {
        bg_Primary: '#748173',
        text_Primary: '#749383',
        text_Secondry: '#e9d6c2'
      },
      fontFamily: {
        El_Messiri: ['El Messiri'],
      },
    },
  },
  plugins: [require("daisyui")],
};

// bacground primary #748173
// Text color #749383
// second text color #e9d6c2
