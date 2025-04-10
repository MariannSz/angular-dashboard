module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f3f1ff",
          100: "#e9e5ff",
          200: "#d5cfff",
          300: "#b7a9ff",
          400: "#9478ff",
          500: "#7341ff",
          600: "#631bff",
          700: "#611bf8",
          800: "#4607d0",
          900: "#3c08aa",
          DEFAULT: "#611bf8",
        },
      },
    },
  },
  plugins: [],
};
