import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customer from "./pages/Customer";
import EmployeeList from "./pages/EmployeeList";
import Header from "./components/Header";

function App() {
  return (
    <div className="text-center bg-gray-100 min-h-screen">
      <Router>
          <Header />
          <Routes>
            <Route index element = {<EmployeeList/>}/>
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/customer" element={<Customer />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
