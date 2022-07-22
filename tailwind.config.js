// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'tablet': '993px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      // colors: {
      //   'noze': '#654A9B',
      // },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
        'railway': ['Railway', 'sans-serif'] 

      },
     
    
    },
  },
  plugins: [],
}
