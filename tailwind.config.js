/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#C8A35F', // Gold
        card: '#1F1F1F',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
