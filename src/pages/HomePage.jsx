import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Card from '../Component/Card';
import styles from './HomePage.module.css';

function HomePage() {
  const { records } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Lista Mezzi di Trasporto</h2>

        {/* Filtro per titolo */}
        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Cerca per titolo..."
            className={styles.input}
          />

          {/* Filtro categoria */}
          <select className={styles.select}>
            <option value="">Tutte le categorie</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
            <option value="bus">Monopatini</option>
            <option value="bus">Bici</option>
          </select>

          {/* Filtro dalla a-z */}
          <select className={styles.select}>
            <option value="">Ordina A-Z</option>
            <option value="title-asc">Titolo (A-Z)</option>
            <option value="category-asc">Categoria (A-Z)</option>
          </select>
        </div>

        {/* Lista card */}
        <div className={styles.cardList}>
          {records.length > 0 ? (
            records.map((record) => (
              <Card key={record.id} data={record} />
            ))
          ) : (
            <p>Nessun dato trovato.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
