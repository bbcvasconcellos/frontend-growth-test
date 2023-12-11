/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "#000000",
        bgModules: "#131313",
        bgModulesCard: "#212121",
      },
      colors: {
        "button-blue": "#1040FF",
        "status": "#0AFFA7"
      },
      textColor: {
        "heading": "#000000",
        "support-text": "#858585",
        "support-text-blue": "#75A5FF",
        "support-text-module": "#A8A8A8",
        "support-text-cta": "#737373",
        "notActive": "#969696"
      },
      fontFamily: {
        sans: "var(--font-articulat)"
      },
      fontSize: {
        hero: '3.25rem'
      }
    },
  },
  plugins: [],
}

