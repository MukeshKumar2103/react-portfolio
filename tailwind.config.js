module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 15px 1px #aaa",
      },
      animation: {
        spinSlow: "spin 10s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
    fontFamily: {
      giraffe: ["Giraffe"],
      krub: ["Krub"],
      marcellus: ["Marcellus"],
      simplifica: ["Simplifica"],
      quicksand: ["Quicksand"],
    },
    // screens: {
    //   ms: "320px",
    //   mm: "375px",
    //   ml: "425px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1440px",
    // },
  },
  plugins: [],
}
