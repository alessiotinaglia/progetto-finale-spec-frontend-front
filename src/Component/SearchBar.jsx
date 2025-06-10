import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ records, onSearch }) {
    const [filterTitle, setFilterTitle] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [alphabeticalSorting, setAlphabeticalSorting] = useState('');

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
    }, [filterTitle, filterCategory, alphabeticalSorting, records, onSearch]);

    return (
        <div className={styles.controls}>
            <input
                type="text"
                placeholder="Cosa stai cercando..."
                className={styles.input}
                value={filterTitle}
                onChange={(e) => setFilterTitle(e.target.value)}
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
