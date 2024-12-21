/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2X Extra large devices
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // Extra small
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // Small
        base: ["1rem", { lineHeight: "1.5rem" }], // Base size
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // Large
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // Extra Large
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 2X Extra Large
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 3X Extra Large
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 4X Extra Large
        "5xl": ["3rem", { lineHeight: "1" }], // 5X Extra Large
        "6xl": ["3.75rem", { lineHeight: "1" }], // 6X Extra Large
        "7xl": ["4.5rem", { lineHeight: "1" }], // 7X Extra Large
        "8xl": ["6rem", { lineHeight: "1" }], // 8X Extra Large
        "9xl": ["8rem", { lineHeight: "1" }], // 9X Extra Large
      },
    },
  },
  plugins: [],
};