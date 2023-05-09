import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Main.module.css';
import { AiOutlineClose , AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [dis,setDis] = useState(true)
  const [isicon ,setIsicon] = useState(true)
  const handleclick = () => {
    setDis(!dis)
    setIsicon(!isicon)
    
  }
  return (
    <div>
    <header className={styles.Header}>
      <div onClick={handleclick} className={styles.Menu}>{isicon ? <AiOutlineMenu /> : <AiOutlineClose /> }</div>
      <NavLink className={styles.Logo} to="/">Logo</NavLink>
      <div className={dis ? styles.Navdiv : styles.blackDiv}>
      <nav className={styles.Navbar}>
        <ul className={styles.Ulnav}>
          <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Page +</NavLink>
            <ul className={`${styles.pageInul} ${styles.Ulnav}`}>
              <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Men +</NavLink>
                <ul className={styles.Ulnav}>
                  <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Men wear</NavLink> </li>
                  <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Men shoes</NavLink></li>
                </ul>

              </li>
              <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Women</NavLink></li>
            </ul>
          </li>
          <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Product +</NavLink>
            <ul className={`${styles.pageInul} ${styles.Ulnav}`}>
            <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Women</NavLink></li>
              <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Men +</NavLink>
                <ul className={styles.Ulnav}>
                  <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Men wear</NavLink> </li>
                  <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Men shoes</NavLink></li>
                </ul>

              </li>
              
            </ul>
          </li>
          <li className={styles.Linav}><NavLink className={styles.Linknav} to="/about">About</NavLink></li>
          <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Home</NavLink></li>
        </ul>
      </nav >
      </div>
    </header >
    </div>
  )
}

export default Navbar
