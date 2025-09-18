import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}>HomePage</Route>
      
    </Routes>
    
  )
}

export default App
