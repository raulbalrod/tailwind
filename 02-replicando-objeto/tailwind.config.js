/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{html,js}',
];

export const theme = {
  extend: {
    colors: {
      // Primary colors
      'lightred': 'hsl(0, 100%, 67%)',
      'orangeyyellow': 'hsl(39, 100%, 56%)',
      'greenteal': 'hsl(166, 100%, 37%)',
      'cobaltblue': 'hsl(234, 85%, 45%)',
      
      // Gradients
      'lightslateblue': 'hsl(252, 100%, 67%)',
      'lightroyalblue': 'hsl(241, 81%, 54%)',
      'violetblue': 'hsla(256, 72%, 46%, 1)',
      'persianblue': 'hsla(241, 72%, 46%, 0)',
      
      // Neutral colors
      'white': 'hsl(0, 0%, 100%)',
      'paleblue': 'hsl(221, 100%, 96%)',
      'lightlavender': 'hsl(241, 100%, 89%)',
      'darkgrayblue': 'hsl(224, 30%, 27%)',
    },
    fontSize: {
      // Body Copy
      'body': '18px',
    },
    fontFamily: {
      // Font
      'hanken': ['Hanken Grotesk', 'sans-serif'],
    },
  },
};

export const plugins = [];