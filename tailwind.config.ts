import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      1920: { max: "1920px" },
      1440: { max: "1440px" },
      1280: { max: "1280px" },
      1024: { max: "1024px" },
      768: { max: "768px" },
      640: { max: "640px" },
      430: { max: "430px" },
      375: { max: "375px" },
      320: { max: "320px" }
    },
    extend: {
      colors: {
        primary: "#CAFC01",
        verified: "#05ABFF",
        success: "#00AC4F",
        golden: "#FCC501",
        warning: "#FFCE00",
        error: "#FF5722",
        danger: "#FF0505",
        favorite: "#E91E63",
        main: {
          100: "#1B1B1B",
          200: "#2B2B2B",
          300: "#3B3B3B",
          900: "#858585 "
        },
        white: {
          100: "#FFFFFF10",
          200: "#FFFFFF20",
          300: "#FFFFFF30",
          400: "#FFFFFF40",
          500: "#FFFFFF50",
          600: "#FFFFFF60",
          700: "#FFFFFF70",
          800: "#FFFFFF80",
          900: "#FFFFFF90",
          DEFAULT: "#FFFFFF"
        },
        black: {
          100: "#00000010",
          200: "#00000020",
          300: "#00000030",
          400: "#00000040",
          500: "#00000050",
          600: "#00000060",
          700: "#00000070",
          800: "#00000080",
          900: "#00000090",
          DEFAULT: "#000000"
        }
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900"
      },
      backgroundImage: {
        primary_gradient_tab: "linear-gradient(101deg, #FCC501 -5.36%, #ABFF68 81.92%)",
        primary_gradient_text: "linear-gradient(97deg, #FCC501 8.85%, #ABFF68 97.33%)"
      }
    }
  },
  plugins: []
};
export default config;
