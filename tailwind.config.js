/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      cursive: ['Bakbak One', 'Orbitron'],
      // sans: ['ui-sans-serif', 'system-ui'],
      // serif: ['ui-serif', 'Georgia'],
      // mono: ['ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [require('daisyui')],
}
