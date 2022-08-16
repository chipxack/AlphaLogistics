module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './#/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: `#412395`,
        },

        orange: {
          primary: `#FFCC00`,
        },
        black: `#16171E`,
      },

      boxShadow: {
        100: `0px 0px 8px rgba(2, 75, 128, 0.16)`,
      },

      // EXO 2   -> Goldman
      // Poppins -> Inter
      fontFamily: {
        inter: [`'Inter'`, `sans-serif`],
        exo: [`'Goldman'`, `cusrive`],
        gm: [`'Goldman', cursive`],
        // poppins: [`'Inter'`, `sans-serif`],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}
