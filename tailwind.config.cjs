/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      'min-2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'min-xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'min-lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'min-md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'min-sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".clr-bg": {
          background: "#0F2132",
		      color: "white",
        },
        ".grid-item-ball": {
          display: "grid",
          gridTemplateColumns: "1fr 20px",
          justifyContent: "center",
          gap: "10px",
        },
        ".grid-ball": {
          display: "block",
          width: "fit-content",
          margin: "auto",
        }
      });
    },
  ],
};
