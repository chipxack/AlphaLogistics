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
  plugins: [],
};
