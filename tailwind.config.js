/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
            fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },

      colors: {
        text: "#FFFFFF",
        background: "#1A1A1A",
        secondary_bg:"#1A1A1A"

      },
      backgroundImage: (theme) => ({
        "custom-background": "url('src/assets/Images/Hero.png')",
      }),
    },
  },
  plugins: [],
};
