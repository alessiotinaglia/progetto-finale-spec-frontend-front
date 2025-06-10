import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import SearchBar from '../Component/SearchBar';
import CardList from '../Component/CardList';
import styles from './ComparePage.module.css';

function ComparePage() {
    const { records } = useContext(GlobalContext);

    const [leftRecords, setLeftRecords] = useState(records);
    const [rightRecords, setRightRecords] = useState(records);

    return (
        <>
            <h1 className={styles.title}>Confronta Prodotti</h1>
            <div className={styles.compareContainer}>
                <div className={styles.column}>
                    <h2 className={styles.titleSecondary}>Prodotto 1 </h2>
                    <SearchBar records={records} onSearch={setLeftRecords} />
                    <p className={styles.totalCount}>
                        Risultati trovati: {leftRecords.length}
                    </p>
                    <CardList records={leftRecords} />
                </div>

                <div className={styles.column}>
                    <h2 className={styles.titleSecondary}>Prodotto 2</h2>
                    <SearchBar records={records} onSearch={setRightRecords} />
                    <p className={styles.totalCount}>
                        Risultati trovati: {leftRecords.length}
                    </p>
                    <CardList records={rightRecords} />
                </div>
            </div>
        </>
    );
}

export default ComparePage;
