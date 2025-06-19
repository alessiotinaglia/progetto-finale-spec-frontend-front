import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.navbar}>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Tutti i mezzi di trasporto di cui hai bisogno puoi trovarli qui
        </h1>
        <p className={styles.subtitle}>
          Qui puoi trovare auto, moto e molto altro...
        </p>

        {/* smistamento pagine */}
        <nav className={styles.navlink}>
          <NavLink to="/" className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }>
            Home
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }>
            Preferiti
          </NavLink>
          <NavLink to="/compare" className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }>
            Confronta Prodotti
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
