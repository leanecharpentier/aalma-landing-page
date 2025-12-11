/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#44d7a8',
        'primary-dark': '#2563eb',
        'primary-light': '#60a5fa',
        secondary: '#8b5cf6',
        'secondary-dark': '#7c3aed',
        accent: '#f59e0b',
        'accent-dark': '#d97706',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

