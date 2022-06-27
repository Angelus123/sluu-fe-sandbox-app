const colors = require("tailwindcss/colors");
const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: {
        dark: "#c4c4c4",
        DEFAULT: "#ffffff",
      },
      red: {
        plight: "#edb5bd",
        light: "#ff2642",
        DEFAULT: "#ff2642",
        dark: "#ff2642",
        coin: "#cfb5d7",
      },
      purple: {
        light: "#7000ff59",
        DEFAULT: "#7000ff",
        dark: "#5914b8",
      },
      blue: {
        darkest: "#1b90d6",
        dark: "#1b90d6",
        DEFAULT: "#18b1ff",
        light: "#e0e6ed",
        lightest: "#f9fafc",
        deep: "#0852AE",
        pblue: "#1F329B",
      },
      gray: colors.gray,
      Orange: "#F58157",
      darkOrange: "#FF7254",
      lightOrange: "#F5DDCF",
      Beige: "#FCEEDE",
      Blue: "#648DE5",
      Red: "#FF2642",
      Gray: "#FAF5ED",
      lightGray: "#F6F6F6",
      darkBlack: "#454342",
      green: "#2BC6AE",
      lightPink: "#F6F2F2",
      darkGray: "#696969",
      grayLight1: "#959595",
      divider: "#E3E3E3",
      suvaGray: "#96908E",
      lightBlue: "#638DE4",
      pink: "#FCEFDE",
      navyBlue: "#081158",
      grayLight2: "#B6B6B6",
    },
    fontFamily: {
      sans: ["Monteseraff ", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {
      height: {
        
        23: "26rem",
        27: "32rem",
       
      },
      spacing: {
        "3px": "15%",
      },
      inset: {
        "0": 0,
        auto: "auto",
        "1/2.5": "40%",
        "1/4.5": "30%",
      },
      invert: {
        1: "1",
        25: ".25",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
