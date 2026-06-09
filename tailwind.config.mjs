/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'sans-serif'],
      },
      colors: {
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
        },
        green: {
          500: '#10B981',
          600: '#059669',
        },
      },
    },
  },
  plugins: [],
};
