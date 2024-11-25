import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/components/Page/Home";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Store from "./assets/components/Page/Store";
import Nike from "./assets/components/Page/Nike";
import NewBalance from "./assets/components/Page/Newbalance";
import Adidas from "./assets/components/Page/Adidas";
import Puma from "./assets/components/Page/Puma";
import ProductPage from "./assets/components/Page/ProductPage";
import { ProductPageFooter } from "./assets/components/Category/ProductPageFooter";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/adidas" element={<Adidas />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/puma" element={<Puma />} />
        <Route path="/newbalance" element={<NewBalance />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
