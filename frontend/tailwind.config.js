/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0e0f12',
          surface: '#15171b',
          card: '#1a1c21',
          cardHover: '#1f2127',
          sidebar: '#121316',
          border: '#26282f',
          borderLight: '#32353e',
          textMuted: '#9496a1',
          textSubtle: '#62646f'
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          sidebar: '#ffffff',
          border: '#e2e8f0',
          borderLight: '#cbd5e1',
          textMuted: '#64748b',
          textSubtle: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
