import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#02adb5',
      primaryDarker: '#10747a',
      primaryTransparent: '#e3f3f2',
      primaryLighter: 'rgba(27, 79, 70, 0.505)',
      secondary: '#219ebc',
      secondaryLighter: 'rgba(33, 157, 188, 0.52)',
      dark: '#393e46',
      gray: '#6e6f71',
      grayLight: '#6e6f7191',
      light: '#fffefc',
      darkest: '#001d23',
      lightActive: '#465b5a',
      success: 'rgb(15, 98, 15)',
      error: 'rgb(209, 47, 47)'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
