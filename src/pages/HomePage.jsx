import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import SearchBar from '../Component/SearchBar';
import styles from './HomePage.module.css';
import CardList from '../Component/CardList';


function HomePage() {
  const { records } = useContext(GlobalContext);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [alphabeticalSorting, setAlphabeticalSorting] = useState('');

  const filteredRecords = records.filter((record) => {
    const matchesTitle = record.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesCategory = filterCategory === '' || record.category === filterCategory;
    return matchesTitle && matchesCategory;
  });

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
    <>
      
      <div className={styles.immagine}>
        <div className={styles.container}>
          <div>
            <h2 className={styles.heading}>Tutti i Mezzi di Trasporto</h2>

            {/* utilizzo componente search */}
            <SearchBar
              filterTitle={filterTitle}
              setFilterTitle={setFilterTitle}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              alphabeticalSorting={alphabeticalSorting}
              setAlphabeticalSorting={setAlphabeticalSorting}
            />

            {/* utilizzo componente lista delle card + formattazione card */}
            <CardList records={sortedRecords} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
