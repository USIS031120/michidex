
import './App.css'
import { Header } from './components/Header'
import { Michidex } from './components/Michidex'
import { SearchBar } from './components/SearchBar'
import { MichiProvider } from './context/MichiContext'

function App() {

  return (
    <MichiProvider>
      <div className='container'>
          <Header />
          <SearchBar />
          <Michidex />
      </div>
    </MichiProvider>
  )
}

export default App
