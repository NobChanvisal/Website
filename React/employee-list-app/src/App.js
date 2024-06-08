import { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';

function App() {
  return (
    <div className=' text-center'>
      <Header/>
      <EmployeeList/>
    </div>
    
  )
}

export default App;
