import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>
      {/* immagine sinistra */}
      <img src="./aaaa.jpg" alt="Logo sinistro" className={`${styles.logo} ${styles.logoFlipped}`} />

      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Tutti i mezzi di trasporto di cui hai bisogno puoi trovarli qui
        </h1>
        <p className={styles.subtitle}>
          Qui puoi trovare auto, moto e molto altro...
        </p>
      </div>

      {/* immagine destra */}
      <img src="./aaaa.jpg" alt="Logo sinistro" className={styles.logo}

      />
    </div>
  );
}

export default NavBar;
