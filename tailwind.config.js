/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'bcg-primary': '#2c3e50',
          'bcg-secondary': '#3498db',
          'vitals-bg': '#f4f4f4'
        },
        spacing: {
          'safe-bottom': '3.5rem'
        },
        boxShadow: {
          'vitals-card': '0 4px 6px rgba(0, 0, 0, 0.1)'
        }
      }
    },
    plugins: []
  }