/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',

      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx}'
   ],
   theme: {
      screens: {
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px'
      },
      extend: {
         colors: {
            accent: '#3AE000',
            'accent-dark': '#4DA32F',
            'accent-darker': '#255116',
            'accent-light': '#9DFF7A',
            'light-theme-text': '#000000'
         },
         boxShadow: {
            'solid-sm': '1px 1px 0px rgba(0, 0, 0, 0.15)',
            'solid-md': '3px 3px 0px rgba(0, 0, 0, 0.15)',
            'solid-xl': '5px 5px 0px rgba(0, 0, 0, 0.15)'
         },
         dropShadow: {
            'solid-sm': '1px 1px 0px rgba(0, 0, 0, 0.15)',
            'solid-md': '3px 3px 0px rgba(0, 0, 0, 0.15)',
            'solid-xl': '5px 5px 0px rgba(0, 0, 0, 0.15)'
         }
      }
   },
   plugins: []
};
