import React from 'react';
import './App.css';
import Student from "./components/Student";

function App() {
  const Data = [
    {
      name: "Heng",
      gender: "Male"
    },
    {
      name: "Duck",
      gender: "Female"
    }
  ];

  return (
    <div>
      <Student name="Chanvisal" age={20} isStudent={true} />
      <Student name="Chandara" age={19} />
      <Student name="Daimond Stars" age={15} isStudent={true} />

      <h1>Hello world from another screen</h1>
      {Data.map((data) => (
        <h1>{data.name} {data.gender}</h1>
        
      ))}
    </div>
  );
}

export default App;
