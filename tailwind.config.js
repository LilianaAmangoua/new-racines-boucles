/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/home/greta/Documents/new-racines-boucles/index.html",
    "/home/greta/Documents/new-racines-boucles/script.js"],
    
    safelist: [
      // Marges
      { pattern: /m[trblxy]?-?\d+/ }, // Ex : mt-2, mx-4, m-3, etc.
      { pattern: /p[trblxy]?-?\d+/ }, // Ex : pt-2, px-4, p-3, etc.
  
      // Width / Height
      { pattern: /w-(auto|full|\d+\/\d+|px|\d+)/ }, // Ex : w-1/12, w-full
      { pattern: /h-(auto|full|\d+\/\d+|px|\d+)/ }, // Ex : h-1/12, h-full
  
      // Flexbox
      { pattern: /(flex|justify|items|content)-(start|end|center|between|around|evenly)/ }, // Ex : justify-between, items-center
      { pattern: /(flex|shrink|grow)(-\d+)?/ }, // Ex : flex, flex-1, shrink-0
  
      // Display (essentiel pour flexbox)
      'flex', 'block', 'inline-block', 'inline-flex',
  
      // Classes utiles en général
      'hidden', 'absolute', 'relative', 'fixed', 'sticky',
    ],
  theme: {
    extend: {
      colors : {
        'my-black' : '#3c3c3c',
        'my-white' : '#f8f8f8',
        'my-fuschia' : '#FF00A8',
        'light-pink' : '#FFC1CC',
      }
    },
  },
  plugins: [],
}

