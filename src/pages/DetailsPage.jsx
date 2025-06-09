import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/transports/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Errore nella risposta');
        return res.json();
      })
      .then((data) => {
        setRecord(data.transport);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Errore nel fetch per ID:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!record) return <p>Nessun dato trovato</p>;

  return (
    <div>
      <h1>{record.title}</h1>
      <img
        src={record.images[0]}
        alt={record.models}
        style={{ maxWidth: '400px', height: 'auto', marginBottom: '20px' }}
      />
      <p><strong>Categoria:</strong> {record.category}</p>
      <p><strong>Modello:</strong> {record.models}</p>
      <p><strong>Anno di immatricolazione:</strong> {record.YearofRegistration}</p>
      <p><strong>Condizione:</strong> {record.condition}</p>
      <p><strong>Prezzo:</strong> €{record.price}</p>
      <p><strong>Data di pubblicazione:</strong> {record.dayOfPublication}</p>
      <p><strong>Chilometraggio:</strong> {record.mileage.toLocaleString()} km</p>
      <p><strong>Elettrica:</strong> {record.eletric ? "Sì" : "No"}</p>
      <p><strong>Descrizione:</strong> {record.description}</p>
    </div>
  );
}

export default DetailPage;
