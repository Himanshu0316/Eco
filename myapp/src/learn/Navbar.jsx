import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Main.module.css';
const Navbar = () => {
  return (
    <header className={styles.Header}>
      <NavLink className={styles.Logo} to="/">Logo</NavLink>
      <nav className={styles.Navbar}>
        <ul className={styles.Ulnav}>
          <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Page +</NavLink>
            <ul className={styles.pageInul}>
              <li><NavLink className={styles.Linknav} to="/">Men +</NavLink>
                <ul >
                  <li><NavLink className={styles.Linknav} to="/">Men wear</NavLink> </li>
                  <li><NavLink className={styles.Linknav} to="/">Men shoes</NavLink></li>
                </ul>

              </li>
              <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Women</NavLink></li>
            </ul>
          </li>

          <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">About</NavLink></li>
          <li className={styles.Linav}><NavLink className={styles.Linknav} to="/">Home</NavLink></li>
        </ul>
      </nav >
    </header >
  )
}

export default Navbar
