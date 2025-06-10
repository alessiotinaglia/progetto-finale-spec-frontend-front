import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import styles from './DetailsPage.module.css';

function DetailPage() {
  
  const { id } = useParams();
  const { recordDetails, getRecordDetails, loading, error } = useContext(GlobalContext);

  useEffect(() => {
    getRecordDetails(id);
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!recordDetails) return <p>Nessun dato trovato</p>;

  return (
    <div>
      <h1 className={styles.title}>{recordDetails.transport.title || "Titolo non disponibile"}</h1>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <div>
            <img
              src={recordDetails.transport.images?.[0] || 'placeholder.jpg'}
              alt={recordDetails.transport.models || "Modello non disponibile"}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.details}>
          <p><strong>Categoria: </strong> {recordDetails.transport.category || "Non disponibile"}</p>
          <p><strong>Modello: </strong> {recordDetails.transport.models || "Non disponibile"}</p>
          <p><strong>Condizione: </strong> {recordDetails.transport.condition || "Non disponibile"}</p>
          <p><strong>Chilometraggio: </strong> {recordDetails.transport.mileage?.toLocaleString() || "Non disponibile"} km</p>
          <p><strong>Elettrica: </strong> {recordDetails.transport.electric ? "Sì" : "No"}</p>
          <p><strong>Prezzo: </strong> €{recordDetails.transport.price || "Non disponibile"}</p>
          <p><strong>Anno di immatricolazione: </strong> {recordDetails.transport.yearOfRegistration || "Non disponibile"}</p>
          <p><strong>Data di pubblicazione: </strong> {recordDetails.transport.dayOfPublication || "Non disponibile"}</p>
          <p><strong>Descrizione: </strong> {recordDetails.transport.description || "Non disponibile"}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
