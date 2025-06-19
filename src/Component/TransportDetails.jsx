// importo per react.memo
import React from 'react';

import styles from './TransportDetails.module.css';
import FavoriteStar from '../Component/FavoriteStar';

function TransportDetails({ transport }) {
    if (!transport) return null;

    return (
        <div className={styles.card}>
            <div className={styles.favoriteIcon}>
                <FavoriteStar data={transport} />
            </div>
            <div className={styles.imageContainer}>
                <img
                    src={transport.images?.[0] || 'placeholder.jpg'}
                    alt={transport.models || "Modello non disponibile"}
                    className={styles.image}
                />
            </div>
            <div className={styles.details}>

                <p><strong>Categoria: </strong> {transport.category || "Non disponibile"}</p>
                <p><strong>Modello: </strong> {transport.models || "Non disponibile"}</p>
                <p><strong>Condizione: </strong> {transport.condition || "Non disponibile"}</p>
                <p><strong>Chilometraggio: </strong> {transport.mileage?.toLocaleString() || "Non disponibile"} km</p>
                <p><strong>Elettrica: </strong> {transport.electric ? "Sì" : "No"}</p>
                <p><strong>Prezzo: </strong> €{transport.price || "Non disponibile"}</p>
                <p><strong>Anno di immatricolazione: </strong> {transport.dayOfPublication || "Non disponibile"}</p>
                <p><strong>Data di pubblicazione: </strong> {transport.dayOfPublication || "Non disponibile"}</p>
                <p><strong>Descrizione: </strong> {transport.description || "Non disponibile"}</p>
            </div>
        </div>
    );
}

export default React.memo(TransportDetails);