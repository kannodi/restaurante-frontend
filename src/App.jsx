import CartaPage from './pages/CartaPage'
import MesasPage from './pages/MesasPage'
import NavBar from './components/NavBar'
import ComandasPages from './pages/ComandasPage'
import CarritoPage from './pages/CarritoPage'
import MenuPage from './pages/MenuPage'
function App() {
  return (
    <div>
      <NavBar />
      <CartaPage />
      <MenuPage />
      <CarritoPage />
      <MesasPage />
      <ComandasPages />
    </div>
  )
}

export default App
