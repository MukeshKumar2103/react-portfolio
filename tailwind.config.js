module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
  },
  plugins: [],
}
