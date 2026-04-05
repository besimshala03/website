/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        border: '#27272a',
        primary: '#f5f5f0',
        muted: '#71717a',
        accent: '#6ee7b7',
        tag: '#1a1a1a',
        tagtext: '#a1a1aa',
      },
      fontFamily: {
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
