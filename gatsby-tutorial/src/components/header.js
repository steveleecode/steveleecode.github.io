// Step 1: Import React
import * as React from 'react'
import * as styles from '../styles/header.module.css'

// Step 2: Define your component
const Header = () => {
  return (
    <main className={styles.header}>
        <h1>Steve Lee</h1> 
    </main>
  )
}

// Step 3: Export your component
export default Header