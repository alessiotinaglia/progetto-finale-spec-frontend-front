import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // da creare: 

    // Lista dei record, che mostra solo le proprietà principali title e category, e include:
    // Barra di ricerca per cercare nei titoli (title)
    // Filtro per categoria (category)
    // Ordinamento alfabetico per title o category (A-Z e Z-A)
    // Pagina di dettaglio per ogni record, con visualizzazione estesa delle sue proprietà
    // Comparatore di 2 record, visualizzati affiancati per confrontarne le caratteristiche, È libera la modalità di selezione: puoi permettere all’utente di aggiungere record al comparatore direttamente dalla lista, dalla pagina di dettaglio, oppure usare un menu a tendina, checkbox o qualsiasi altro sistema.
    // L’utente può aggiungere o rimuovere record dai preferiti in qualsiasi momento
    // I preferiti devono essere consultabili in ogni sezione dell’app (es. tramite una sezione dedicata, un’icona fissa, o una sidebar)

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
