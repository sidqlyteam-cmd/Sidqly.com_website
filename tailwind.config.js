/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidqly-green-deep': '#0F4D3E',
        'sidqly-green-emerald': '#15803D',
        'sidqly-green-soft': '#A7F3D0',
        'sidqly-gold': '#D4AF37',
        'sidqly-navy': '#0B1D2A',
        'sidqly-ivory': '#F8FAFC',
      },
    },
  },
  plugins: [],
}
