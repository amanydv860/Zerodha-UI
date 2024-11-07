/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          light: '#f0e7db', // custom color for light variant   class="bg-customColor-light text-customColor-dark"
          anchorcolor : "#387ed1",
          footerbg : "#fbfbfb"
        },
      },
    },
  },
  plugins: [],
}

