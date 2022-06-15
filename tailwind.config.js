// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./components/Layout.js'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
