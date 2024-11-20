const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,vue}",
    "./layout/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: { sans: "Inter var", ...defaultTheme.fontFamily.sans },
      colors: {
        primary: colors.blue[500],
        ...colors.blue,
      },
    },
  },
  plugins: [],
};
