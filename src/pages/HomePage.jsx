import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Card from '../Component/Card';
import styles from './HomePage.module.css';

function HomePage() {
  const { records } = useContext(GlobalContext);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [alphabeticalSorting, setAlphabeticalSorting] = useState('');

  // 1. Filtraggio per titolo e categoria
  const filteredRecords = records.filter((record) => {
    const matchesTitle = record.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesCategory = filterCategory === '' || record.category === filterCategory;
    return matchesTitle && matchesCategory;
  });

  // filtro per riordinare dalla a-z e z-a 
  const sortedRecords = [...filteredRecords].sort((a, b) => {
    if (alphabeticalSorting === 'asc') {
      return a.title.localeCompare(b.title);
    } else if (alphabeticalSorting === 'desc') {
      return b.title.localeCompare(a.title);
    } else {
      return 0;
    }
  });

  return (
    <div className={styles.immagine}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.heading}>Tutti i Mezzi di Trasporto</h2>
          <div className={styles.controls}>
            {/* cerca */}
            <input
              type="text"
              placeholder="Cosa stai cercando..."
              className={styles.input}
              value={filterTitle}
              onChange={(e) => setFilterTitle(e.target.value)}
            />

            {/* Filtro per categoria */}
            <select
              className={styles.select}
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">Categorie</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
              <option value="monopattini">Monopattini</option>
              <option value="bici">bici</option>
            </select>

            {/* Ordinamento alfabetico */}
            <select
              className={styles.select}
              value={alphabeticalSorting}
              onChange={(e) => setAlphabeticalSorting(e.target.value)}
            >
              <option value="">Riordina in ordine alfabetico</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>

          {/* Conteggio records */}
          <p className={styles.totalCount}>
            {sortedRecords.length} Risultati trovati...
          </p>

          {/* Lista delle card */}
          <div className={styles.cardList}>
            {sortedRecords.length > 0 ? (
              sortedRecords.map((record) => (
                <Card key={record.id} data={record} />
              ))
            )
              : (
                <div className={styles.noResultsMessage}>
                  <p>Spiacenti, il prodotto selezionato non e disponibile</p>
                </div>
              )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
