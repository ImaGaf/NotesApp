// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white-10': 'rgba(162,162,162,0.7)',
        'background': '#f5f5f5',
      },
      height: {
        'calc-100vh-minus-10rem': 'calc(100vh - 6rem)',
      },
      colors: {
        primary: '#1D4ED8',   
        secondary: '#4B5563', 
        accent: '#F59E0B',  
        background: '#F3F4F6' 
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none', 
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
}
