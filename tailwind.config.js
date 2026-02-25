/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a1324",
          900: "#0d1a33",
          800: "#10213f",
          700: "#13294c"
        },
        blue: {
          400: "#4fa3ff",
          500: "#3987e5",
          600: "#2b6cc3"
        },
        gold: {
          400: "#e1c46a",
          500: "#d4af37",
          600: "#b9932d"
        },
        bronze: {
          500: "#a97c50"
        }
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(57, 135, 229, 0.25)"
      },
      backgroundImage: {
        space:
          "radial-gradient(1200px 600px at 20% 10%, rgba(49, 87, 192, 0.15), transparent 60%), radial-gradient(900px 400px at 80% 0%, rgba(30, 58, 138, 0.20), transparent 60%), linear-gradient(180deg, #0b1224, #070b17)",
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
