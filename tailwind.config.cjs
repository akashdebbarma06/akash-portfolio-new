/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#0E1015',
        'paper-dim': '#151821',
        ink: '#E2E8F0',
        slate: '#94A3B8',
        blueprint: '#3B82F6',
        coral: '#D64545',
        redtag: '#D64545',
        line: '#222633',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
