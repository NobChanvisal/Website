/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(63, 94, 251)',
        customGreen: 'rgb(0, 121, 32)',
        customOrange: 'rgb(255, 136, 0)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".recommed-btns": {
          padding: "8px 20px",
          marginRight: "6px",
          background: "transparent",
          border:"0.6px solid #ccc",
          borderRadius: "5px",
          color: "#323232",
          cursor: "pointer"
        },
        ".recommed-btns:hover": {
          color: "black"
        },
        ".label-container": {
          display: "block",
          position: "relative",
          paddingLeft: "35px",
          marginBottom: "12px",
          cursor: "pointer",
        },
        ".label-container input": {
          position: "absolute",
          opacity: "0",
          cursor: "pointer"
        },
        ".checkmark": {
          position: "absolute",
          top: "0",
          left: "0",
          height: "15px",
          width: "15px",
          border: "1px solid #ddd",
          backgroundColor: "#eee",
          borderRadius: "50%",
        },
        ".label-container:hover input ~ .checkmark": {
          backgroundColor: "#ccc"
        },
        ".label-container input:checked ~ .checkmark": {
          backgroundColor: "#2196f3"
        },
        ".checkmark::after": {
          content: '""',
          position: "absolute",
          display: "none"
        },
        ".label-container input:checked ~ .checkmark::after": {
          display: "block"
        },
        ".label-container .checkmark::after": {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "white"
        },
      })
    }
  ],
}
