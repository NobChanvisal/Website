import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Page/Home";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Store from "./assets/components/Page/Store";
import Nike from "./assets/components/Page/Nike";
import NewBalance from "./assets/components/Page/Newbalance";
import Adidas from "./assets/components/Page/Adidas";
import Puma from "./assets/components/Page/Puma";
import ProductPage from "./assets/components/Page/ProductPage";
import { ShoppingCart } from "./assets/components/Page/ShoppingCart";



function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}> 
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
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
