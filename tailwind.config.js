module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      borderRadius: {
        "3xl": "100%",
      },
      translate: {
        "2/4": "-50%",
      },
      boxShadow: {
        "3xl": "inset 0 0 20px rgba(255, 255, 255, 0)",
      },
      fontFamily: {
        sans: [ "Helvetica", "Arial", "Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      letterSpacing: {
      
        widest: '0.6em',
      }
    },
  },
  plugins: [],
}
