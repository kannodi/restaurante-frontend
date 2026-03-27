import Home from './pages/Home'
import MesasPage from './pages/MesasPage'
import NavBar from './components/NavBar'
import ComandasPages from './pages/ComandasPage'
import CarritoPage from './pages/CarritoPage'
function App() {
  return (
    <div>
      <CarritoPage />
      <NavBar />
      <Home />
      <MesasPage />
      <ComandasPages />
    </div>
  )
}

export default App
