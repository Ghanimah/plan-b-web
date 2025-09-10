// tailwind.config.js
module.exports = {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        honey:       '#F3BF18',
        'honey-dark':'#F2A516',
        'bee-black': '#0D0D0D',
        'bee-red':   '#BE3C21',
        offwhite:    '#F2F2F2',
      },
      backgroundImage: {
        // your existing hex grid, plus:
        'hex-grid': "url('/assets/honeycomb.svg')",
        'honey-bg': "url('/assets/background3.png')",
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
      });
    },
  ],
}
