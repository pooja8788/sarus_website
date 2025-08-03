/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
      'grid-pattern': "url('/path-to-grid-image.svg')", // replace if using CSS-based grid
      'hero-gradient': 'linear-gradient(185deg, #e0f2fe, #f0f4ff, #3d3e3e)', // or your actual colors
    },
      colors: {
        navy: '#1e2a38',
      'navy-light': '#2c3e50'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
