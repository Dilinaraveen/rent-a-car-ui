/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Outfit', 'sans-serif'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: ["light"], // This will disable all default themes
    },
  
  }
  