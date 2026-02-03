/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // Koyu Lacivert (Kurumsal Güven)
          light: "#334155",
        },
        accent: {
          DEFAULT: "#10b981", // Canlı Yeşil (Enerji ve Sürdürülebilirlik)
          dark: "#047857",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          800: "#1f2937",
        }
      },
    },
  },
  plugins: [],
};