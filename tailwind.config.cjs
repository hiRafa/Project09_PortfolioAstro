/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      'max-2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'max-xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'max-lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'max-md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'max-sm': {'max': '500px'},
      // => @media (max-width: 639px) { ... }
      'max-s': {'max': '375px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".clr-bg": {
          background: "var(--clr-bg)",
		      color: "white",
        },
        ".clr-text": {
		      color: "var(--clr-bg)",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".clr-brand-blue": {
          color: "var(--clr-coder)",
        },
        ".clr-brand-orange": {
          color: "var(--clr-sys)",
        },
        // ".orange-bar": {
        //   backgroundColor: "var(--clr-sys)",
        // },
        // ".grid-item-ball": {
        //   display: "grid",
        //   gridTemplateColumns: "1fr 20px",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: "10px",
        // },
        ".grid-ball": {
          display: "block",
          width: "fit-content",
          margin: "auto",
        }
      });
    },
  ],
};
