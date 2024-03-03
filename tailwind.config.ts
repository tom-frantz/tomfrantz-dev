import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lothian-blue": {
          light: "#424b57",
          DEFAULT: "#263240",
          dark: "#19232f",
        },
        "stars-bg": "#272120",
      },
      backdropBrightness: {
        25: ".25",
      },
      boxShadow: {
        uniform: "0px 0px 150px 150px rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
