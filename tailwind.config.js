/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FBF9F5',
          200: '#F4EFE6',
          300: '#EAE2D5',
        },
        charcoal: {
          900: '#121417',
          800: '#1C1F24',
          700: '#2A2F37',
          600: '#4A5260',
          500: '#6C7584',
        },
        coastal: {
          900: '#0B2929',
          800: '#113E3E',
          700: '#1A5352',
          600: '#26706F',
          500: '#3D9190',
        },
        terracotta: {
          700: '#9C4329',
          600: '#B85336',
          500: '#C86D51',
          400: '#D98971',
        },
        brass: {
          600: '#9E804D',
          500: '#B89B66',
          400: '#CBB282',
          300: '#DEC9A3',
        }
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        serif: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        sans: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.04em',
      }
    },
  },
  plugins: [],
}
