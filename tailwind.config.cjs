/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        500: "#58a6ff",
      },
      gray: {
        900: "#0D1117",
        500: "#21262d",
        300: "#8b949e",
        50: "#c9d1d9",
      },
      green: {
        500: "#238636",
      },
      white: {
        DEFAULT: '#FFFFFF'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
      }
    },
    extend: {},
  },
  plugins: [],
};
