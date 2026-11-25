
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../Header'
import { Michidex } from '../Michidex'
import { SearchBar } from '../SearchBar'
import { MichiProvider } from '../context/MichiProvider'
import { FavoritesPage } from '../pages/FavoritesPage'
import { Hero } from '../Hero'

function App() {

  return (
    <MichiProvider>
      <BrowserRouter>
          <Header />
          <Hero />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Michidex />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
          </Routes>
      </BrowserRouter>
    </MichiProvider>
  )
}

export default App
