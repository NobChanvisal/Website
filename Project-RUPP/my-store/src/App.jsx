import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnsaleProduct from "./assets/components/Category/OnsaleProduct";
import Home from "./assets/components/Page/Home";
import Header from "./assets/components/Header";
import Store from "./assets/components/Page/Store";
import Nike from "./assets/components/Page/Nike";
import NewBalance from "./assets/components/Page/Newbalance";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/newbalance" element={<NewBalance />} />
        <Route path="/sale-items" element={<OnsaleProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
