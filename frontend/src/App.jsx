import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import NewHome from './Components/NewHome'
import Services from './Components/About'


function App() {

  return (
   <>
   <Routes>
    <Route path='/' element={<NewHome/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/contact' element={<Contact/>} />
    </Routes>
   </>
  )
}

export default App
