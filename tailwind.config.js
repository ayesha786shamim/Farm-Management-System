/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Niramit: ["Niramit", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        Forest_Green: "#0F783B",
        Ice_Blue: "#9DC8AF",
        Golden: "#BE8B45",
        Text_Color: "#414141",
        Background_Color: "#fcfeffff",
        Black: "#000000",
        Gray: "#686868",
        "custom-green-dark": "#13783C",
        "custom-green-bright": "#38BE17",
        Red: "#D63535",
        Light_Blue: "#F3FBF2",
        Gray2: "#D9D9D9",
        white2: "#F8F7EF",
        Dark_Green: "#0c6432",
        Input_Bg: "#F5F5F599",
        Input_Border: "#00000012",
        Input_Text: " #9D9999",
        GrayText : "#5C5C5C"
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(90deg, #13783C, #38BE17)",
        "gradient-custom-horizontal":"linear-gradient(90deg, #13783C, #38BE17)",
        "gradient-custom-vertical": "linear-gradient(180deg, #13783C, #38BE17)",
        "gradient-custom-diagonal": "linear-gradient(45deg, #13783C, #38BE17)",
        "gradient-custom-opposite-diagonal": "linear-gradient(135deg, #13783C, #38BE17)",
      },
      
    },
  },
  plugins: [],
};
