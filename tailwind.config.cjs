/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
        // Asashiki Design v2: Newsreader 衬线 display — 用于大标题/大数字等「编辑感」点缀
        serif: ["'Newsreader'", "ui-serif", "Georgia", "'Songti SC'", "'Noto Serif CJK SC'", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
