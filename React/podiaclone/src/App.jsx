import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/navbar/Header'
import Home from './components/homepage/Home'
import './App.css'

function App() {
  return(
    <div>
      <Header></Header>
      <Home/>
    </div>
  )
}

export default App
