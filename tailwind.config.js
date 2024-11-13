/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#603F26",
        secondary: "#493628"
      },

      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },

      container: {
        center:true,
        padding:{
          DEFAULT: "1rem",
          sem: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6 rem"
        },
        animation: {
          "spin-slow": "spin 40s linear infinite",
        },
      }
    },
  },
  plugins: [],
}

