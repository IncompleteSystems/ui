/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "../../node_modules/@incomplete/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@incomplete/**/*.{js,jsx,ts,tsx}",
    "./**/stories/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

