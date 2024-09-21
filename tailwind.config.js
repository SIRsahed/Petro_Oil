/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./src/assets/banner.png')",
        'service1': "url('./src/assets/service1.png')",
        'service2': "url('./src/assets/service2.png')",
        'service3': "url('./src/assets/service3.png')",
        'learnmore': "url('./src/assets/learn.png')",
        'blog1': "url('./src/assets/blog1.png')",
        'blog2': "url('./src/assets/blog2.png')",
        'blog3': "url('./src/assets/blog3.png')",
      }
    },
    maxWidth:{
      container: "1200px"
    },
    fontFamily: {
      'pops': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}