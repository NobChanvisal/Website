import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/navbar/Header";
import Home from "./components/page/Home";
import Footer from "./components/Footer";
import OnlineCourses from "./components/articles/OnlineCourses.jsx";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import DigitalDownload from "./components/articles/DigitalDownload.jsx";
import Collapse from "./components/Category/Collapse.jsx";
import Coaching from "./components/articles/Coaching.jsx";
import Homes from "./components/Category/Homes.jsx";
import ArticlesChildImgLeft from "./components/Category/ArticlesChildImgLeft.jsx";
import ArticlesChildImgRight from "./components/Category/ArticlesChildImgRight.jsx";
import Rate from "./components/Category/Rate.jsx";
import Webinars from "./components/articles/Webinars.jsx";
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onlineCourse" element={<OnlineCourses />} />
          <Route path="/digitalDownload" element={<DigitalDownload/>} />
          <Route path="/coaching" element={<Coaching/>}/>
          <Route path="/webinars" element={<Webinars/>}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
    
  );
}

export default App;
