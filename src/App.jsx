
import './App.css'
import { Filters } from './components/Filters'
import { Header } from './components/Header'
import { Michidex } from './components/Michidex'
import { SearchMichi } from './components/SearchMichi'
import { MichiProvider } from './context/MichiContext'

function App() {

  return (
    <MichiProvider>
      <div className='container'>
          <Header />
          <SearchMichi />
          <Filters />
          <Michidex />
      </div>
    </MichiProvider>
  )
}

export default App
