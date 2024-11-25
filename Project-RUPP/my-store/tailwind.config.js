/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
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
          backgroundColor: "white",
          border: "1px solid #ddd",
        },
      })
    }
  ],
}