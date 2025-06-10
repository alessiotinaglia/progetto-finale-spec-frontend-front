import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import SearchBar from '../Component/SearchBar';
import CardList from '../Component/CardList';
import styles from './HomePage.module.css';

function HomePage() {
  const { records } = useContext(GlobalContext);
  const [filteredRecords, setFilteredRecords] = useState(records);

  return (
    <div className={styles.immagine}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Tutti i Mezzi di Trasporto</h2>

        <SearchBar records={records} onSearch={setFilteredRecords} />

        <p className={styles.totalCount}>
          Risultati trovati: {filteredRecords.length}
        </p>

        <CardList records={filteredRecords} />
      </div>
    </div>
  );
}

export default HomePage;
