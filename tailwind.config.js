/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#38BDF8',  /* sky-400 */
          light: '#7DD3FC',   /* sky-300 */
          dark: '#0EA5E9',    /* sky-500 */
        },
      },
    },
  },
  plugins: [],
}
