export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#222222',
        textSecondary: '#818181',
        logoSelected: '#000000',
        logoSecondary: '#717171',
        logoAccent: '#dddddd',
        logoPrimary: '#ff385c',
        borderSecondary: '#cccccc',
      },
    },
    screens: {
      sm: '545px',
      md: '745px',
      lg: '950px',
      xl: '1440px',
    },
  },
  plugins: [],
}