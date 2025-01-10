/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "border-blue-600",
    "border-green-600",
    "border-pink-600",
    "hover:text-blue-600",
    "hover:text-red-600",
    "hover:text-yellow-600",
    "hover:text-green-600",
    "hover:text-sky-600",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
