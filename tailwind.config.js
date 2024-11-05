/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-img': "url('/src/assets/greenGrid.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}