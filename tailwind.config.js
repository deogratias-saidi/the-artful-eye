/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        PTSerif: ["PT Serif", "sans-serif"],
      },
    },
    screens: {
      mm: "960px",
      // => @media (min-width: 960px) { ... }
      me: "1554px",
      // => @media (min-width: 1554px) { ... }

      xm: "380px",
      //  => @media (min-width: 380px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mr: "855px",
      // => @media (min-width: 855px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1287px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
