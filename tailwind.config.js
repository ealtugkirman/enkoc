/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        first: ["Montserrat", "sans-serif"],
        second: ["Gruppo", "sans-serif"],
      },
      backgroundImage: {
        site: "url('./src/assets/enkoc-photo/Manzara/hero.jpg')",
      },
    },
  },
  plugins: [],
};
