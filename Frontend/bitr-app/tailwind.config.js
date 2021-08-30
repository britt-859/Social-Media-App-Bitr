module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        surface: "var(--surface)",
        "on-primary": "var(--on-primary)",
        "on-surface": "var(--on-surface)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
