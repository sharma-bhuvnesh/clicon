/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FA8232",
        },
        secondary: {
          500: "#2DA5F3",
          600: "#2484C2",
          700: "#1B6392",
        },
        warning: {
          300: "#F3DE6D",
          500: "#EBC80C",
        },
        gray: {
          50: "#F2F4F5",
          600: "#5F6C72",
          700: "#475156",
          900: "#191C1F"
        }
      }
    },
  },
  plugins: [],
}

