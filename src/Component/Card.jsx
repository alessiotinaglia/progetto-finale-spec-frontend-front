import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ data }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.category}>Categoria: {data.category}</p>
            <Link to={`/detail/${data.id}`} className={styles.button}>
                Dettagli
            </Link>
        </div>
    );
}

export default Card;
