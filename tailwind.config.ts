import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 70s print palette. Tang is decoration only: it fails contrast as text
      // on paper, so text in that role uses rust instead.
      colors: {
        paper: { DEFAULT: '#F4EAD5', light: '#FBF5E8', deep: '#EADBBE' },
        ink: { DEFAULT: '#2A1A11', soft: '#5B4334' },
        tang: '#E5622A',
        mustard: '#EFAA31',
        rust: '#A93A14',
        avocado: '#56631F',
        cocoa: '#6B4226',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        hard: '5px 5px 0 0 #2A1A11',
        'hard-lg': '8px 8px 0 0 #2A1A11',
      },
    },
  },
  plugins: [],
};
export default config;
