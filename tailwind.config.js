/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update based on your project's file paths
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#798645",
          light: "#FEFAE0",
          cream: "#F2EED7",
          dark: "#626F47",
        },
      },
    },
  },
  plugins: [],
};
