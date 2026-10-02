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
        background: "#F7F7F5",
        foreground: "#171717",
        primary: {
          DEFAULT: "#18552B",
          hover: "#134623",
          dark: "#123D20",
          light: "#236B39",
          50: "#EDF5F0",
          100: "#D7EADF",
          200: "#B2D7C2",
          500: "#18552B",
          700: "#123D20",
          800: "#0D2E18",
          900: "#091F10",
        },
        accent: {
          yellow: "#FFB82E",
          hover: "#ECA31F",
          light: "#FFF4DD",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F7F5",
          alt: "#F0F0ED",
        },
        text: {
          primary: "#171717",
          secondary: "#6B6B6B",
          muted: "#9E9E9E",
        },
        border: {
          DEFAULT: "#E7E7E7",
          light: "#F0F0ED",
          dark: "#D0D0CC",
        },
      },
      fontFamily: {
        sans: ["'Poppins'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      maxWidth: {
        container: "1220px",
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 0, 0, 0.04)',
        'card': '0 8px 24px rgba(24, 85, 43, 0.06)',
        'card-hover': '0 16px 36px rgba(24, 85, 43, 0.12)',
        'pill': '0 2px 8px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
