import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import styles from './DetailsPage.module.css';
import TransportDetails from '../Component/TransportDetails';


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
      <TransportDetails transport={recordDetails.transport} />
    </div>

  );
}

export default DetailPage;
