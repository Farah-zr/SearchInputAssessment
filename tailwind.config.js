module.exports = {
  content: ["./components/**/*.{ts,tsx,vue}", "./app/**/*.{ts,tsx,vue}", "./src/**/*.{ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        white: "var(--white)",
        border: "var(--border)",
        highlight: "var(--highlight)"
      }
    }
  },
  variants: {},
  plugins: []
}
