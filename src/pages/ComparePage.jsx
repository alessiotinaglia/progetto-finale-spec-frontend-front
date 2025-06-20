import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import SearchBar from '../Component/SearchBar';
import TransportDetails from '../Component/TransportDetails';
import styles from './ComparePage.module.css';
import FavoriteStar from '../Component/FavoriteStar';

function ComparePage() {
    const { records, getRecordDetails } = useContext(GlobalContext);

    const [leftRecords, setLeftRecords] = useState(records || []);
    const [rightRecords, setRightRecords] = useState(records || []);
    const [expandedLeftId, setExpandedLeftId] = useState(null);
    const [expandedRightId, setExpandedRightId] = useState(null);
    const [leftDetails, setLeftDetails] = useState(null);
    const [rightDetails, setRightDetails] = useState(null);

    // Quando records cambia di valori da dx/str
    useEffect(() => { //eseguire il codice al primo caricamento della pagina
        if (Array.isArray(records)) {
            setLeftRecords(records);
            setRightRecords(records);
        } else {
            setLeftRecords([]);
            setRightRecords([]);
        }
    }, [records]);


    const renderDetails = (details) => {
        if (!details) return <p>Errore nel caricamento del dettaglio.</p>;
        return <TransportDetails transport={details.transport} />;
    };

    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '2.5em', margin: 30 }}>Confronta Prodotti</h1>
            <div className={styles.compareContainer}>
                <div className={styles.column}>
                    {!expandedLeftId && (
                        <>
                            <h2 className={styles.titleSecondary}>Prodotto 1</h2>
                            <SearchBar records={records} onSearch={setLeftRecords} />
                            <p className={styles.totalCount}>
                                Risultati trovati: {leftRecords.length}
                            </p>
                        </>
                    )}
                    {expandedLeftId
                        ? renderDetails(leftDetails)
                        : leftRecords.map((car) => (
                            <div className={styles.container} key={car.id}>
                                <div className={styles.card}>
                                    <FavoriteStar data={car} />
                                    <h3 className={styles.title}>{car.title}</h3>
                                    <p className={styles.category}>Categoria: {car.category}</p>
                                    <button
                                        className={styles.button}
                                        onClick={async () => {
                                            setExpandedLeftId(car.id);
                                            const data = await getRecordDetails(car.id);
                                            setLeftDetails(data);
                                        }}
                                    >
                                        Dettaglio
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.column}>
                    {!expandedRightId && (
                        <>
                            <h2 className={styles.titleSecondary}>Prodotto 2</h2>
                            <SearchBar records={records} onSearch={setRightRecords} />
                            <p className={styles.totalCount}>
                                Risultati trovati: {rightRecords.length}
                            </p>
                        </>
                    )}
                    {expandedRightId
                        ? renderDetails(rightDetails)
                        : rightRecords.map((car) => (
                            <div className={styles.container} key={car.id}>
                                <div className={styles.card}>
                                    <FavoriteStar data={car} />
                                    <h3 className={styles.title}>{car.title}</h3>
                                    <p className={styles.category}>Categoria: {car.category}</p>
                                    <button
                                        className={styles.button}
                                        onClick={async () => {
                                            setExpandedRightId(car.id);
                                            const data = await getRecordDetails(car.id);
                                            setRightDetails(data);
                                        }}
                                    >
                                        Dettaglio
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ComparePage;
