import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/navbar/Header'
import Home from './components/homepage/Home'
import Service from './components/serviceDetail/Service'
import Courses from './components/onlineCourse/Course'
import Coaching from './components/coaching/Coaching'
import Webinars from './components/webinars/Webinars'
import './App.css'

function App() {
  return(
    <div className='bg-[#fdfbf9] h-full w-full'>
      <Header></Header>
      <Home/>
      <Service></Service>
      <Courses/>
      <Coaching/>
      <Webinars/>
    </div>
  )
}

export default App
