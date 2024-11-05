import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "ITC Garamond",
          "ITCfallback",
          ...defaultTheme.fontFamily.serif,
        ],
        italic: ["ITC Garamond Italic", ...defaultTheme.fontFamily.serif],
        sans: ["Elza", ...defaultTheme.fontFamily.sans],
        mono: ['"Ubuntu Mono"', "monospace"],
      },
      width: {
        68: "17rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        100: "25rem",
        108: "27rem",
        160: "40rem",
        200: "50rem",
        240: "60rem",
        248: "62rem",
        256: "64rem",
        260: "65rem",
        280: "70rem",
        320: "80rem",
      },
      maxWidth: {
        vw: "100vw",
      },
      spacing: {
        104: "26rem",
        108: "27rem",
        116: "29rem",
        120: "30rem",
        128: "32rem", // following the standard of 128 / 4 = 32
        136: "34rem",
        144: "36rem",
      },
      colors: {
        custom: "#f8f8f8",
      },
      scale: {
        102: "1.025",
      },
    },
  },
  plugins: [],
};
