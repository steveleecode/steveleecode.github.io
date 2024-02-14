// Step 1: Import React
import * as React from 'react'
import * as styles from '../styles/header.module.css'

// Step 2: Define your component
const Header = () => {
  return (
    <ul className={styles.header}>
      <li className={styles.mainHeader}>
        <a className = {styles.mainHeaderLink}  href="/">Stephen Lee</a>
      </li>
      <li className={styles.headerRight}>
        <div className={styles.headerButton}>
          <a className = {styles.headerLink} href="/comingSoon" >Projects</a>
        </div> 
        <div className={styles.headerButton}>
          <a className = {styles.headerLink} href="/repos" >Repositories</a>
        </div> 
        <div className={styles.headerButton}>
          <a className = {styles.headerLink} href="/cv" >CV</a>
        </div> 
      </li>
    </ul>
  )
}

// Step 3: Export your component
export default Header