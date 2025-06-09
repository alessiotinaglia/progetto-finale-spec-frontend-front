import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3001/transports';
        console.log('API URL:', url);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log('Dati ricevuti:', data);
                setRecords(data);
            })
            .catch(error => console.error('Errore nel fetch:', error));
    }, []);

    return (
        <GlobalContext.Provider value={{ records, setRecords }}>
            {children}
        </GlobalContext.Provider>
    );
};
