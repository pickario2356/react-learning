import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head}>
        <h3>Introduction</h3>
        <button className={styles.btn}>login here</button>
    </div>
  )
}

export default Header