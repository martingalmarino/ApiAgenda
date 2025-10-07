/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors for beekeeping platform
        honey: {
          50: '#fffbf0',
          100: '#fff4d6',
          200: '#ffe7ad',
          300: '#ffd474',
          400: '#ffc107', // Main honey yellow
          500: '#e6a600',
          600: '#cc8f00',
          700: '#b37700',
          800: '#996000',
          900: '#7d4d00',
        },
        field: {
          50: '#f0f9f0',
          100: '#ddf2dd',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#4caf50', // Main green field
          500: '#3d8b40',
          600: '#2e6b31',
          700: '#255428',
          800: '#1f4422',
          900: '#1a371e',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5', // Light gray background
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121', // Dark gray text
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

