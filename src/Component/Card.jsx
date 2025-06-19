// importo per react.memo
import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import FavoriteStar from './FavoriteStar';

function Card({ data }) {
    return (
        <div className={styles.card}>
            <FavoriteStar data={data} />
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.category}>Categoria: {data.category}</p>
            <Link to={`/detail/${data.id}`} className={styles.buttonDetails}>
                Dettagli
            </Link>
        </div>
    );
}

export default React.memo(Card);
