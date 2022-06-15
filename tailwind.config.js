module.exports = {
  content: [ './public/index.html',
            './src/**/*.{html,js}',
  ],
  theme: {
    colors:{
      'white': '#ffffff',
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../images/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../images/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../images/yosemite.jpg')",
        'LA': "url('../images/LA.jpg')",
        'seattle': "url('../images/seattle.jpg')",
        'new_york': "url('../images/new_york.jpg')",
        'norway': "url('../images/norway.jpg')",
        'sydney': "url('../images/sydney.jpg')",
        'miami': "url('../images/miami.jpg')",
        'switzerland': "url('../images/switzerland.jpg')",
        'bali': "url('../images/bali.jpg')",
        'chicago': "url('../images/chicago.jpg')",
        'europe': "url('../images/europe.jpg')",
        'iceland': "url('../images/iceland.jpg')",
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'terciary': '#61AEC9',
      'footer': '#FCFBFB',
      'gray-900': '#111827',
      'gray-800': '#1F2937',
      'gray-700': '#374151',
      'gray-300': '#D1D5DB',
    }),
    textColor: {
      'footer': '#CBCBCB',
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'terciary': '#61AEC9',
      'white': '#ffffff',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  variants: {
    width: ["responsive", "hover", "focus"]
  },
  darkMode: 'class',
}
