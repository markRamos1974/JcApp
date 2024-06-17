
module.exports = {
  content: [
    "./views/*.ejs",
    "./views/partials/*.ejs"
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
}

