// Step 1: Import React
import * as React from 'react'
import * as styles from '../styles/header.module.css'

// Step 2: Define your component
const Header = () => {
  return (
    <ul className={styles.header}>
      <li className={styles.mainHeader}>
        <a className = {styles.mainHeaderLink}  href="/">Steve Lee</a>
      </li>
      <li className={styles.headerRight}>
        <div className={styles.headerButton}>
          <a className = {styles.headerLink} href="/about" >About</a>
        </div> 
        <div className={styles.headerButton}>
          <a className = {styles.headerLink} href="/portfolio" >Projects</a>
        </div> 
      </li>
    </ul>
  )
}

// Step 3: Export your component
export default Header