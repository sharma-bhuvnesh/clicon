/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFE7D6",
          500: "#FA8232",
        },
        secondary: {
          500: "#2DA5F3",
          600: "#2484C2",
          700: "#1B6392",
        },
        warning: {
          300: "#F3DE6D",
          400: "#EFD33D",
          500: "#EBC80C",
        },
        danger: {
          500: "#EE5858",
          600: "#BE4646",
        },
        gray: {
          50: "#F2F4F5",
          100: "#E4E7E9",
          300: "#ADB7BC",
          400: "#929FA5",
          600: "#5F6C72",
          700: "#475156",
          800: "#303639",
          900: "#191C1F"
        }
      }
    },
  },
  plugins: [],
}

