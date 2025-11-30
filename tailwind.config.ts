import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'braxton-blue': '#4A6895', // Main blue from WordPress
        'braxton-orange': '#E8A825', // Orange/gold accent color
        'braxton-yellow': '#fef3c7', // Yellow-100 equivalent for active menu
        'braxton-white-trans': 'rgba(255,255,255,.6)', // White transparent for buttons
        'braxton-separator': 'rgba(255,255,255,.4)', // Separator color
      },
    },
  },
  plugins: [],
};
export default config;

