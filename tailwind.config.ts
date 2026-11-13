/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0F766E', // brand primary
          800: '#115E59', // brand hover
          900: '#134e4a',
          950: '#042f2e',
          DEFAULT: '#0F766E',
          hover: '#115E59',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#F97316', // brand accent
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#F97316',
          hover: '#ea580c',
        },
        dark: {
          footer: '#0B1F1E',
          text: '#CBD5D1',
        },
        surface: {
          page: '#FFFFFF',
          alt: '#F6F8F7',
        },
        border: '#E2E8F0',
        content: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '16px',
        cardSm: '12px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        lift: '0 12px 30px -4px rgba(15, 23, 42, 0.12)',
      }
    },
  },
  plugins: [],
}

