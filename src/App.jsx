//gestisce la navigazione a livello di browser
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importo lo stato globale che racchiude tutto 
import { GlobalProvider } from './context/GlobalContext'

// importo componenti
import NavBar from './pages/NavBar'

// importo le pagine della mia applicazione 
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailsPage'
import FavoritesPage from './pages/FavoritesPage'
import ComparePage from './pages/ComparePage'


function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/compare" element={<ComparePage />} />
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App;
