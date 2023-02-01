module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 15px 1px #aaa",
      },
    },
    colors: {
      primary: "#7f8da0",
      secondary: "#7f8da0",
      bg: "#d8e3e8",
      dark: "#041e42",
      light: "#eee",
      darkGray: "#777",
      gray: "#aaa",
      green: "#31938f",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Open Sans"],
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
