/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        "noto-sans-devanagari": "'Noto Sans Devanagari'",
        "yatra-one": "'Yatra One'",
      },
      fontSize: {
        base: "16px",
        sm: "14px",
        xl: "20px",
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
