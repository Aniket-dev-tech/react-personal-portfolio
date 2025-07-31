/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2.5s infinite linear",
        "text-glow": "text-glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        "text-glow": {
          "0%": { textShadow: "0 0 8px #3b82f6" },
          "100%": { textShadow: "0 0 15px #06b6d4" },
        },
      },
    },
  },
  plugins: [],
}