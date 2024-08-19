/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        DmSerif:['"DM Serif Text"','serif']
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.sub-navbar-info a': {
          display: 'block',
          marginTop: '8px',
          fontSize: '15px',
          color: '#5c5856',
        },
        '.container':{
          paddingLeft: '88px',
          paddingRight: '88px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '0',
          maringBottom: '0',
        },
        '.sub-navbar-info a:hover': {
          color: '#8a57ea',
        },
        '.dropdown-toggle': {
          borderRadius: '20px',
          transition: '0.2s ease',
        },
        '.dropdown-toggle:hover': {
          backgroundColor: '#f5efeb',
          
        },
        '.dropdown-toggle:focus': {
          backgroundColor: '#f5efeb',
          border: '1px solid #9484c6'
        },
        '.header': {
          fontFamily: 'Inter, sans-serif',
        },
        '.heading-text':{
          fontSize: '12px',
          fontWeight: '500',
          color: '#9c8881',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        },
        'section':{
          marginTop: '6rem',
          fontFamily: 'Inter, sans-serif',
        },
        '.section-description': {
          marginTop: '10px',
          fontSize: '20px',
          color:'#5c5856'
        },
        '.center-card':{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          textAlign: 'center'
        },
        '.stars':{
          paddingBottom:'14px'
        },
        '.review-quote':{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          maringBottom: '24px',
        },
        '.review-quote h2':{
          fontSize: '20px',
          color: 'black'
        },
        '.review-quote p':{
          fontSize: '18px',
          color: '#5c5856',
          paddingTop: '20px'
        }
      });
    },
  ],
}
