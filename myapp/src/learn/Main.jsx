import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
const Main = () => {
  return (
    <div>
      <Navbar />
      <Routes> 
      <Route path="/" element={<Home/>}></Route>
     </Routes> 
    </div>
  )
}

export default Main