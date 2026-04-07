// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Legacy palette (kept for backwards compatibility with existing components)
        honey: '#F5A623',
        'honey-dark': '#C88A1A',
        'bee-black': '#0F0F1A',
        'bee-red': '#C88A1A',
        offwhite: '#FAFAFA',
        // New bee / hive theme palette
        gold: {
          DEFAULT: '#F5A623',
          light: '#FFD166',
          bright: '#FFD700',
          dark: '#C88A1A',
          deep: '#8A5A10',
        },
        cream: '#FFF8E7',
        hive: {
          night: '#0F0F1A',
          dark: '#1A1A2E',
          card: '#1F1B2E',
          border: '#2E2A3F',
        },
      },
      fontFamily: {
        display: ['Outfit', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hex-grid': "url('/assets/honeycomb.svg')",
        'honey-bg': "url('/assets/background3.png')",
        'gold-radial':
          'radial-gradient(circle at center, rgba(245,166,35,0.18) 0%, rgba(245,166,35,0) 60%)',
        'gold-gradient':
          'linear-gradient(135deg, #FFD166 0%, #F5A623 50%, #C88A1A 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(245, 166, 35, 0.35)',
        'glow-lg': '0 0 80px rgba(245, 166, 35, 0.45)',
        honey: '0 20px 50px -15px rgba(245, 166, 35, 0.55)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  corePlugins: { container: false },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('screens.2xl'),
          margin: '0 auto',
          padding: `0 ${theme('spacing.4')}`,
          '@screen sm': { padding: `0 ${theme('spacing.6')}` },
          '@screen lg': { padding: `0 ${theme('spacing.8')}` },
        },
      })
    },
  ],
}
