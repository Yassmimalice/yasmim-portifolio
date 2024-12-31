/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)'],
          display: ['var(--font-space)'],
        },
        colors: {
          pink: {
            light: '#FFD6E5',
            DEFAULT: '#FF69B4',
            dark: '#FF1493',
          },
          rose: {
            light: '#FFB6C1',
            DEFAULT: '#FF69B4',
          },
          cream: '#FFF0F5',
        },
        backgroundColor: {
          light: 'rgb(var(--background))',
          dark: 'rgb(var(--foreground))',
        },
        textColor: {
          light: 'rgb(var(--foreground))',
          dark: 'rgb(var(--background))',
        },
      },
    },
    plugins: [],
  }
  
  