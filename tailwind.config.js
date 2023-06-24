/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(45deg, rgba(238,197,189,1) 0%, rgba(243,177,165,1) 33%, rgba(198,202,246,1) 67%, rgba(218,217,233,1) 100%)',
        'white-text-gradient' : 'linear-gradient(180deg, #F5F5F8 0%, #BBBBBD 100%)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'Helvetica', 'serif'],
      }
    },
  },
  plugins: [],
}
