/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './domains/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/domains/**/*.{js,jsx,ts,tsx}',
    './src/shared/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#555555',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        fancy: ['"Futura Std"', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
