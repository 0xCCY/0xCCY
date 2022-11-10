/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bgBlack: '#191919',
        bgPurple: 'rgb(128, 0, 128)',
      },
      fontFamily: {
        dosis: 'Dosis',
      },
    },
  },
  plugins: [],
};
