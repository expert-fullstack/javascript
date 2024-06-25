import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(1fr, 8)",
      },
      margin: {
        grid: "24px",
      },
      gap: {
        grid: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
