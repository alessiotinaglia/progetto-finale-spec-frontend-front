import { useCallback, useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ records, onSearch }) {
    const [filterTitle, setFilterTitle] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [alphabeticalSorting, setAlphabeticalSorting] = useState('');


    // utilizzo della funzione debouce per non causare re rendering inutili 
    function debounce(callback, delay) {
        let timer;
        return (value) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback(value)
            }, delay)
        }
    }

    // viene eseguita dopo il render del componente
    useEffect(() => {
        let filtered = records.filter((record) => {
            const matchesTitle = record.title.toLowerCase().includes(filterTitle.toLowerCase());
            const matchesCategory = filterCategory === '' || record.category === filterCategory;
            return matchesTitle && matchesCategory;
        });

        if (alphabeticalSorting === 'asc') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (alphabeticalSorting === 'desc') {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        }

        onSearch(filtered);
        // viene rieseguito ogni volta che una dipendenza cambia
    }, [filterTitle, filterCategory, alphabeticalSorting, records, onSearch]);


    // useCallback serve per memorizzare la funzione e non ricrearla ad ogni render
    const handleFilter = useCallback(
        debounce((value) => {
            setFilterTitle(value);
        }, 1000),
        []
    );

    return (
        <div className={styles.controls}>
            <input
                type="text"
                placeholder="Cosa stai cercando..."
                className={styles.input}
                onChange={(e) => handleFilter(e.target.value)}
            />
            <select
                className={styles.select}
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
            >
                <option value="">Categorie</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
                <option value="monopattini">Monopattini</option>
                <option value="bici">Bici</option>
            </select>
            <select
                className={styles.select}
                value={alphabeticalSorting}
                onChange={(e) => setAlphabeticalSorting(e.target.value)}
            >
                <option value="">Riordina in ordine alfabetico</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </div>
    );
}

export default SearchBar;
