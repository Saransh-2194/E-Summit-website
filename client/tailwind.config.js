module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to your project's folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
