module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./#/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: `#412395`,
        },

        orange: {
          primary: `#FF8B00`,
        },
        black: `#16171E`,
      },

      // EXO 2   -> Goldman
      // Poppins -> Inter
      fontFamily: {
        // inter: [`'Inter'`, `sans-serif`],
        // exo: [`'Goldman'`, `cusrive`],
        gm: [`'Goldman', cursive`],
        // poppins: [`'Inter'`, `sans-serif`],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
