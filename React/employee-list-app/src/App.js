import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Customer from "./pages/Customer";
// import EmployeeList from "./pages/EmployeeList";
// import Header from "./components/Header";
import ProductCartList from "./pages/shoppingcart/ProductCartList";
import Header from "./components/shoppingCart/Header";

function App() {
  return (
    <div className="text-center bg-slate-50 min-h-screen">
      {/* <Router>
          <Header />
          <Routes>
            <Route index element = {<EmployeeList/>}/>
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/customer" element={<Customer />} />
          </Routes>
      </Router> */}
      {/* <Customer></Customer> */}
      <Header/>
      <ProductCartList/>
    </div>
  );
}

export default App;
