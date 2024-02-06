/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEB069",
          DEFAULTY:'#131921'
        },
      },
    },
  },
  plugins: [],
};
