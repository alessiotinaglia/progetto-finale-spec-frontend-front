import { createContext, useState, useEffect, useCallback } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [records, setRecords] = useState([]);
    const [recordDetails, setRecordDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3001/transports';
        console.log('API URL:', url);
        fetch(url)
            // convertiami i dati in json
            .then(res => res.json())
            .then(data => {
                // stampiamo i dati 
                console.log('Dati ricevuti:', data);
                setRecords(data);
            })
            // errori
            .catch(error => {
                console.error('Errore nel fetch:', error);
                setError("Errore nel caricamento dei dati.");
            });
    }, []); //esegue solo una volta quando il componente viene montato

    // useCallback serve per memorizzare una funzione e a non ricrearla a ogni render, almeno se le dipendenze non cambiano 
    const toggleFavorite = useCallback((record) => {
        setFavorites((prev) => {
            // controllo se e gia presente e seente lo toglie
            if (prev.find((fav) => fav.id === record.id)) {
                return prev.filter((fav) => fav.id !== record.id);
            } else {
                // aggiungiamo creando nuovo array + quelli gia inseriti
                return [...prev, record];
            }
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
            return data;
        } catch (error) {
            console.error('Errore nel fetch per ID:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        // provider fornisce tutto hai sui figli funzioni,stato,oggetti
        <GlobalContext.Provider value={{
            records,
            setRecords,
            recordDetails,
            getRecordDetails,
            loading,
            error,
            favorites,
            toggleFavorite,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
