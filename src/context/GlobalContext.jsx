import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [records, setRecords] = useState([]);
    const [recordDetails, setRecordDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'http://localhost:3001/transports';
        console.log('API URL:', url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log('Dati ricevuti:', data);
                setRecords(data);
            })
            .catch(error => {
                console.error('Errore nel fetch:', error);
                setError("Errore nel caricamento dei dati.");
            });
    }, []);

    const getRecordDetails = async (id) => {        
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:3001/transports/${id}`);
            if (!response.ok) throw new Error('Errore nella risposta');
            const data = await response.json();
            console.log('Dettagli ricevuti:', data);
            setRecordDetails(data);
        } catch (error) {
            console.error('Errore nel fetch per ID:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlobalContext.Provider value={{
            records,
            setRecords,
            recordDetails,
            getRecordDetails,
            loading,
            error,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
