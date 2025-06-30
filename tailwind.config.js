// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],

  // If you want to keep your custom container plugin, great!
  corePlugins: { container: false },

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
        // you can move your bg into theme and avoid the arbitrary class
        'honey-bg': "url('/assets/background3.png')",
        'hex-grid': "url('/assets/honeycomb.svg')",
      },
    },
  },

  safelist: [
    // glass cards
    'bg-white/30',
    'backdrop-blur-md',
    'border-white/20',
    'shadow-2xl',

    // your scroll-margin
    'scroll-mt-24',

    // if you still want that arbitrary bg
    "bg-[url('/assets/background3.png')]",

    // any other arbitrary classes you rely on:
    'bg-[url("/assets/honeycomb-pattern.png")]',
  ],

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
};
