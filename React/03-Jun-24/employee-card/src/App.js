import { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import AddEmpButton from './components/AddEmpButton';


function App() {
  return (
    <div className=' text-center'>
      <EmployeeList/>
    </div>
    
  )
}

export default App;
