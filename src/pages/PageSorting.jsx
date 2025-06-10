import { NavLink } from 'react-router-dom';
import styles from './PageSorting.module.css';

function PageSorting() {
    return (
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
    );
}

export default PageSorting;
