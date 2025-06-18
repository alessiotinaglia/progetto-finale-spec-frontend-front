import { createContext, useState, useEffect } from 'react';

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

    const toggleFavorite = (record) => {
        setFavorites((prev) => {
            if (prev.find((fav) => fav.id === record.id)) {
                return prev.filter((fav) => fav.id !== record.id);
            } else {
                return [...prev, record];
            }
        });
    };

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
