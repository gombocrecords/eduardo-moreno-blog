import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          600: '#1B3A6B',
          700: '#162F56',
          800: '#112343',
          900: '#0C1830',
        },
        teal: {
          50:  '#E8F8F5',
          100: '#D5F0EB',
          500: '#0D7377',
          600: '#0A5C5F',
          700: '#084648',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'article': ['1.2rem', { lineHeight: '2rem' }],
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color:      theme('colors.gray.800'),
            fontSize:   '1.15rem',
            lineHeight: '1.9',
            'h2, h3, h4': { color: theme('colors.navy.600') },
            a: { color: theme('colors.teal.500'), textDecoration: 'underline' },
            blockquote: {
              borderLeftColor: theme('colors.teal.500'),
              color:           theme('colors.gray.700'),
              fontStyle:       'italic',
            },
          },
        },
      }),
    },
  },
  plugins: [],
}

export default config
