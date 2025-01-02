const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        xs: '490px',
        mid:'550px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}

