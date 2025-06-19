// importo per react.memo
import React from 'react';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import styles from './Card.module.css';

function FavoriteStar({ data }) {
    const { favorites, toggleFavorite } = useContext(GlobalContext);
    const isFav = favorites.some(fav => fav.id === data.id);

    return (
        <span
            className={styles.star}
            onClick={() => toggleFavorite(data)}
            title={isFav ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
            style={{
                cursor: 'pointer',
                fontSize: '1.5em',
                color: isFav ? '#FFD700' : '#ccc',                
            }}
        >
            {isFav ? '★' : '☆'}
        </span>
    );
}

export default React.memo(FavoriteStar);
