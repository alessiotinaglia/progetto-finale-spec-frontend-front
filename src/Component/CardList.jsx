import Card from './Card';
import styles from './CardList.module.css';

function CardList({ records }) {
    if (records.length === 0) {
        return (
            <div className={styles.noResultsMessage}>
                <p>Spiacenti, il prodotto selezionato non è disponibile</p>
            </div>
        );
    }

    return (
        <div className={styles.cardList}>
            {records.map((record) => (
                <Card key={record.id} data={record} />
            ))}
        </div>
    );
}

export default CardList;
