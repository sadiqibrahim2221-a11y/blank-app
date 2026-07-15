import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sica-blue': '#0B1F3A',
        'sica-cyan': '#00A8E8',
        'sica-emerald': '#2EC4B6',
        'sica-light': '#F8FAFB',
        'sica-gray': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sica-sm': '0 2px 4px rgba(11, 31, 58, 0.08)',
        'sica-md': '0 4px 12px rgba(11, 31, 58, 0.12)',
        'sica-lg': '0 8px 24px rgba(11, 31, 58, 0.16)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
