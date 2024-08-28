/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app//*.{js,ts,jsx,tsx}", 
    "./pages//*.{js,ts,jsx,tsx}", 
    "./components//*.{js,ts,jsx,tsx}", 
      
    // Or if using src directory: 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00040f'
        },
        secondary: {
          DEFAULT: '#00f6ff',
        },
        lightWhite: {
          DEFAULT: 'rgba(255,255,255,0.7)',
        },
        lightBlue: {
          DEFAULT: 'rgba(9,151,125,0.1)',
        }
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px', 
    }
  }
}