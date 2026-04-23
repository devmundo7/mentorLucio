/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0D0D0D',
          800: '#1F1F1F',
          700: '#2A2A2A',
          600: '#333333'
        },
        accent: {
          DEFAULT: '#0F3D2E',
          light: '#16A34A',
          dark: '#14532D',
          glow: '#22C55E'
        }
      }
    }
  },
  plugins: []
}