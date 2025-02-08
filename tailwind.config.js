/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"], // Menyesuaikan dengan struktur proyek
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
