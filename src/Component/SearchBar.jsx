import styles from './SearchBar.module.css';

function SearchBar({ filterTitle, setFilterTitle, filterCategory, setFilterCategory, alphabeticalSorting, setAlphabeticalSorting }) {
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
                <option value="bici">bici</option>
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
