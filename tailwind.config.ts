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
      320: { max: "320px" },
    },
    extend: {
      colors: {
        primary: "#CAFC01",
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
        900: "900",
      },
    },
  },
  plugins: [],
};
export default config;
