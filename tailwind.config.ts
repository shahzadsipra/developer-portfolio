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
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 
      keyframes: {
        loop: {
          '0%': { transform: 'translate3d(-25%, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
      animation: {
        loop: 'loop 20s linear infinite',
      },
      fontFamily: {
        hanson: ['var(--font-hanson)'],
        gilroy: ['var(--font-gilroy)'],
      },
    },
  },
  plugins: [],
};
export default config;
