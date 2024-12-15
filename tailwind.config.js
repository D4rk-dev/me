/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|border)-(neutral|green|blue|violet|gray)/,
  }]
}

