import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route to='/home' element={<Home />}>Home</Route>
      <Route to='/home' element={<Home />}>Home</Route>
      <Route to='/home' element={<Home />}>Home</Route>
      <Route to='/home' element={<Home />}>Home</Route>
      <Route to='/home' element={<Home />}>Home</Route>
    </Routes>
  )
}

export default App
