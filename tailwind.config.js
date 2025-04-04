/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        inter: ['var(--font-inter)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
      },
      colors: {
        tech: {
          white: '#ffffff',
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          darkGray: '#222222',
          silver: '#999999',
          textLight: '#cccccc',
        },
        neon: {
          primary: '#00ff88',
          secondary: '#00ccff',
          accent: '#ff00ff',
        },
      },
      backgroundImage: {
        'hex-pattern': "url('/patterns/hex.svg')",
        'diagonal-pattern': "url('/patterns/diagonal.svg')",
        'grid-pattern': "url('/patterns/grid.svg')",
        'circuit-pattern': "url('/patterns/circuit.svg')",
        'dots-pattern': "url('/patterns/dots.svg')",
        'wave-pattern': "url('/patterns/wave.svg')",
        'blueprint-pattern': "url('/patterns/blueprint.svg')",
        'tech-shape': "url('/decorative/tech-shape.svg')",
        'pulse': "url('/decorative/pulse.svg')",
        'corner-accent': "url('/decorative/corner-accent.svg')",
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px rgba(0, 255, 136, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(0, 255, 136, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'neon-light': '0 0 5px theme("colors.neon.primary"), 0 0 20px theme("colors.neon.primary")',
        'neon-dark': '0 0 5px theme("colors.neon.primary"), 0 0 20px rgba(0, 255, 136, 0.8)',
        'neon-secondary': '0 0 5px theme("colors.neon.secondary"), 0 0 20px rgba(0, 204, 255, 0.8)',
        'neon-accent': '0 0 5px theme("colors.neon.accent"), 0 0 20px rgba(255, 0, 255, 0.8)',
      },
      borderRadius: {
        'angular': '2px 8px 2px 8px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      skew: {
        '20': '20deg',
        '-20': '-20deg',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-hex': {
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        },
        '.diagonal-split': {
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        },
        '.corner-gradient': {
          background: 'radial-gradient(circle at top right, rgba(0, 255, 136, 0.15), transparent 250px)',
        },
        '.tech-gradient': {
          background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05), rgba(0, 204, 255, 0.05))',
        },
        '.accent-border': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            pointerEvents: 'none',
          }
        },
      }
      addUtilities(newUtilities)
    },
  ],
} 