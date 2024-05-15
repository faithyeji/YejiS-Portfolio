import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["ITC Garamond", ...defaultTheme.fontFamily.serif],
        italic: ["ITC Garamond Italic", ...defaultTheme.fontFamily.serif],
        sans: ["Elza", ...defaultTheme.fontFamily.sans],
      },
      width: {
        68: "17rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        240: "60rem",
      },
      spacing: {
        128: "32rem", // following the standard of 128 / 4 = 32
      },
    },
  },
  plugins: [],
};
