import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import CardList from './CardList';

function Favourites() {
    const { favorites } = useContext(GlobalContext);

    if (!favorites.length) {
        return <p style={{ textAlign: 'center', fontSize: '2em', paddingTop: 80, }}>Non ci sono preferiti salvati...</p>;
    }

    return (
        <div style={{
            gap: '1rem',
            maxWidth: 1200,
            margin: '0 auto'
        }}>
            <CardList records={favorites} />
        </div>
    );
}

export default Favourites;
