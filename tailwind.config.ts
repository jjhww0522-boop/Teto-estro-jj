import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },
      colors: {
        pastel: {
          pink: '#FFD6E8',
          purple: '#E5D4FF',
          blue: '#C9E4FF',
          mint: '#D4F8E8',
          yellow: '#FFF4D4',
          peach: '#FFE4D4',
        },
        brand: {
          navy: '#1a1a2e',
          charcoal: '#2d3436',
          accent: '#6c5ce7',
          'accent-rose': '#e17055',
          cream: '#fafaf8',
          surface: '#ffffff',
          success: '#00b894',
          warning: '#fab1a0',
          muted: '#636e72',
          border: '#e0e0e0',
          'border-light': '#f0f0f0',
          highlight: '#f8f7ff',
        },
      },
      borderRadius: {
        card: '12px',
        button: '10px',
        tag: '6px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        button: '0 1px 2px rgba(0,0,0,0.05)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
