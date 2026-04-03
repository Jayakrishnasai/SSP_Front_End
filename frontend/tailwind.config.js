module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6e9ef',
          100: '#b3bdcf',
          200: '#8091af',
          300: '#4d658f',
          400: '#1a396f',
          500: '#0a192f',
          600: '#09162a',
          700: '#081325',
          800: '#07101f',
          900: '#050a14',
        },
        accent: {
          DEFAULT: '#64ffda',
          blue: '#0070f3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
