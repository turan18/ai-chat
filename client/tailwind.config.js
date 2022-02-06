module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      spacing: {      
         '5s' : '5%',
         '6s' : '6%',
         '7s' : '7%',  
         '93': '93%',
         '94': '94%', 
         '95': '95%',

      },
      colors: {
        'user-msg':'#248bf5',
        'ai-msg':'#e5e5ea',
      },
      fontFamily : {
        eng: ["Architects Daughter","sans-serif"],
        led: ["Convergence","sans-serif"]
      }
    },
  },
  plugins: [],
}
