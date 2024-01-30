/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter", "Rubik Glitch", "Poppins", "Sans-serif"',
          {
            fontFeatureSettings: '"cv02" 1, "cv11" 1, "ss03" 1',
          },
        ],
      },
    },
  },
  plugins: [],
};
