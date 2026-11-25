
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Michidex } from './components/Michidex'
import { SearchBar } from './components/SearchBar'
import { MichiProvider } from './context/MichiProvider'
import { FavoritesPage } from './pages/FavoritesPage'

function App() {

  return (
    <MichiProvider>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Michidex />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MichiProvider>
  )
}

export default App
