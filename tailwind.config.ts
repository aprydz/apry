import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#101010",
        foreground: "#F5F5F5",
        card: {
          DEFAULT: "#171717",
          hover: "#1c1c1c",
          subtle: "#141414",
        },
        muted: {
          DEFAULT: "#A0A0A0",
          light: "#CCCCCC",
          dark: "#666666",
        },
        border: {
          DEFAULT: "#2C2C2C",
          strong: "#454545",
          subtle: "#1E1E1E",
        },
        accent: {
          DEFAULT: "#FFFFFF",
          dim: "#E5E5E5",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
