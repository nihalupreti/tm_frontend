/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        smokewhite: "#F5F5F5",
        lowtext: "#D58D49",
        lowbg: "#dfa87433",
        fontgray: "#787486",
        fontheading: "#0D062D",
        hightext: "#D8727D",
        highbg: "#d8727d1a",
        mediumtext: "#D58D49",
        mediumbg: "#dfa87433",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
