import Home from './pages/Home'
import MesasPage from './pages/MesasPage'
import NavBar from './components/NavBar'
import ComandasPages from './pages/ComandasPage'
import CarritoPage from './pages/CarritoPage'
import MenuPage from './pages/MenuPage'
function App() {
  return (
    <div>
      <NavBar />
      <MenuPage />
      <CarritoPage />
      <Home />
      <MesasPage />
      <ComandasPages />
    </div>
  )
}

export default App
