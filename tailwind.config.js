/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "#0B8944",
          dark: "#08602B",
          muted: "rgba(11, 137, 68, 0.10)",
          border: "rgba(11, 137, 68, 0.22)",
        },
        water: {
          DEFAULT: "#104999",
          dark: "#103382",
          muted: "rgba(16, 74, 153, 0.10)",
          border: "rgba(16, 74, 153, 0.22)",
        },
        neutral: {
          50: "#F7F7F7",
          100: "#EFEFEF",
          200: "#E6E6E6",
          300: "#D8D9D9",
          400: "#BFC1C1",
          500: "#8D9090",
          600: "#5C6060",
          700: "#3A3D3D",
          800: "#2F3232",
          900: "#2A2A2B",
        },
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        body: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SF Mono", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
