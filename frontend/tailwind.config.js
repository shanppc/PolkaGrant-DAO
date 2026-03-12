/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        polkaPink: '#FF2EA6',
        polkaPurple: '#A855F7',
        polkaBg: '#07040F'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,46,166,0.25), 0 0 40px rgba(168,85,247,0.12)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' }
        }
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
}

