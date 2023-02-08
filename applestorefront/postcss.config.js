module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./pages/**/*.{vue,js,ts,jsx,tsx}",
        "./pages/index.tsx",
      ],
    },
    autoprefixer: {},
  },
};
