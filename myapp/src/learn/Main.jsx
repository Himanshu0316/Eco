import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import styles from './Main.module.css';
import { Route, Routes } from 'react-router-dom'
import About from './About'
const Main = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Routes> 
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
     </Routes> 
      
    </div>
  )
}

export default Main