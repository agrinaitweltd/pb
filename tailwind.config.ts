import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#1a6b3c',
          dark: '#134d2c',
          light: '#e8f5ee',
          medium: '#2d8a52',
        },
        yellow: {
          primary: '#f5c518',
          light: '#fffbea',
          dark: '#d4a90d',
        },
        background: '#f0f4f1',
        surface: '#fff',
        surface2: '#f7faf8',
        text: {
          primary: '#1a2e22',
          secondary: '#4a6257',
          tertiary: '#8aab98',
        },
        border: {
          DEFAULT: '#d4e6db',
          light: '#eaf3ed',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(26,107,60,.07), 0 4px 12px rgba(26,107,60,.07)',
        cardHover: '0 4px 6px rgba(26,107,60,.05), 0 10px 40px rgba(26,107,60,.12)',
      },
      borderRadius: {
        card: '12px',
        cardSmall: '8px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
