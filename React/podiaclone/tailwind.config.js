/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        DmSerif: ['"DM Serif Text"', "serif"],
      },
      listStyleImage: {
        arrowDow: 'url("./src/components/image/arrowDown.svg")',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".sub-navbar-info a": {
          display: "block",
          marginTop: "8px",
          fontSize: "15px",
          color: "#5c5856",
        },
        ".container": {
          width: "100%",
          paddingLeft: "88px",
          paddingRight: "88px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "0",
          maringBottom: "0",
        },
        ".grid-layout-2": {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "center",
          gap: "64px",
        },
        ".title-section": {
          fontSize: "36px",
          fontFamily: "DM Serif Text, serif",
        },
        ".sub-navbar-info a:hover": {
          color: "#8a57ea",
        },
        ".dropdown-toggle": {
          borderRadius: "20px",
          transition: "0.2s ease",
        },
        ".dropdown-toggle:hover": {
          backgroundColor: "#f5efeb",
        },
        ".dropdown-toggle:focus": {
          backgroundColor: "#f5efeb",
          border: "1px solid #9484c6",
        },
        ".header": {
          fontFamily: "Inter, sans-serif",
        },
        ".heading-text": {
          fontSize: "12px",
          fontWeight: "bold",
          color: "#9c8881",
          textTransform: "uppercase",
          letterSpacing: "2px",
        },
        article: {
          backgroundColor: "#fdfbf9",
          width: "100%",
          height: "100%",
        },
        section: {
          width: "100%",
          marginTop: "6rem",
          fontFamily: "Inter, sans-serif",
        },
        ".section-description": {
          marginTop: "10px",
          fontSize: "20px",
          color: "#5c5856",
        },
        ".center-card": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
        ".stars": {
          paddingBottom: "14px",
        },
        ".review-quote": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maringBottom: "24px",
        },
        ".review-quote h2": {
          fontSize: "20px",
          color: "black",
        },
        ".review-quote p": {
          fontSize: "18px",
          color: "#5c5856",
          padding: "20px",
        },
        ".row-card": {
          display: "flex",
          flexDirection: "row",
          fontSize: "18px",
          marginBottom: "20px",
        },
        ".row-card p": {
          fontWeight: "600",
          marginRight: "16px",
        },
        ".row-card ul": {
          display: "flex",
          flexDirection: "row",
        },
        ".row-card ul li": {
          marginRight: "16px",
          color: "#5c5856",
          fontWeight: "300",
          borderBottom: "solid 1px",
        },
        ".row-card ul li:hover": {
          color: "#4b2aad",
          borderBottom: "solid 1px #d4b2aad",
        },
        ".setOnCol2": {
          gridColumnStart: "2",
          gridColumnEnd: "3",
        },
        ".list-chil": {
          display: "grid",
          gridTemplateColumns: "32px 1fr",
          columnGap: "16px",
          marginBottom: "10px",
        },
        ".list-chil a": {
          color: "#5c5856",
          borderBottom: "2px solid",
          fontWeight: "500",
        },
        "@media (max-width:480px)": {
          ".review-quote h2": {
            fontSize: "18px",
          },
          ".review-quote p": {
            fontSize: "18px",
          },
          ".section-description": {
            fontSize: "18px",
          },
        },
      });
    },
  ],
};
