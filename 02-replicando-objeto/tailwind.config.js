/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{html,js}',
];

export const theme = {
  extend: {
    colors: {
      // Primary colors
      'lightred': 'hsl(0, 100%, 67%)',
      'lightredbg': 'hsla(0, 100%, 67%, 0.2)',
      'orangeyyellow': 'hsl(39, 100%, 56%)',
      'orangeyyellowbg': 'hsla(39, 100%, 56%, 0.2)',
      'greenteal': 'hsl(166, 100%, 37%)',
      'greentealbg': 'hsla(166, 100%, 37%, 0.2)',
      'cobaltblue': 'hsl(234, 85%, 45%)',
      'cobaltbluebg': 'hsla(234, 85%, 45%, 0.2)',
      
      // Gradients
      'lightslateblue': 'hsl(252, 100%, 67%)',
      'lightroyalblue': 'hsl(241, 81%, 54%)',
      // Circle gradients
      'violetblue': 'hsla(256, 72%, 46%, 1)',
      'persianblue': 'hsla(241, 72%, 46%, 0)',
      
      // Neutral colors
      'white': 'hsl(0, 0%, 100%)',
      'paleblue': 'hsl(221, 100%, 96%)',
      'lightlavender': 'hsl(241, 100%, 89%)',
      'darkgrayblue': 'hsl(224, 30%, 27%)',
      'darkgrayblueop': 'hsla(224, 30%, 27%, 0.5)',
    },
    fontSize: {
      // Body Copy
      'body': '18px',
    },
    fontWeight: {
      // Weights
      'nobold': '500',
      'semibold': '700',
      'bold': '800',
    },
    fontFamily: {
      // Font
      'hanken': ['Hanken Grotesk', 'sans-serif'],
    },
  },
};

export const plugins = [];