/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './domains/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#555555',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
