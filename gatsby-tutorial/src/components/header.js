// Step 1: Import React
import * as React from 'react'
import * as styles from '../styles/header.module.css'

// Step 2: Define your component
const Header = () => {
  return (
    <ul className={styles.header}>
        <div className ={styles.headerContent}>
          <li className={styles.mainHeader}>
            <a className = {styles.headerLink}  href="/">Steve Lee</a>
          </li>
          <li className={styles.headerLeft}>
            <div className={styles.headerButton}>
              <a className = {styles.headerLink} href="/about" >About</a>
            </div> 
          </li>
        </div>
    </ul>
  )
}

// Step 3: Export your component
export default Header