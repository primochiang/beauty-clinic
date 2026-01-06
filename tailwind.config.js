/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        secondary: '#c9a96e',
        accent: '#2c5282',
        light: '#fafafa',
        dark: '#333333',
        muted: '#666666'
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif']
      }
    },
  },
  plugins: [],
}
