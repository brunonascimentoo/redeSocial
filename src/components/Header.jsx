import styles from './Header.module.css';
import logo from '../assets/logo.png';
import { Sun, Moon } from 'phosphor-react'

export function Header() {
  return (

    <header className={styles.header}>
      <img src={logo} alt="Logo do Ignite" />
      <div className={styles.boxSunAndMoon}>
        <button className={styles.buttonOnChange}>
          <Sun className={styles.logoSun} />
          <Moon className={styles.logoMoon} />
        </button>
      </div>
    </header>

  );
}