import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartaPage from './pages/CartaPage'
import MesasPage from './pages/MesasPage'
import NavBar from './components/NavBar'
import ComandasPages from './pages/ComandasPage'
import CarritoPage from './pages/CarritoPage'
import MenuPage from './pages/MenuPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Ruta por defecto */}
        <Route path="/" element={<MenuPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/carta" element={<CartaPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/mesas" element={<MesasPage />} />
        <Route path="/comandas" element={<ComandasPages />} />
      </Routes>
    </Router>
  )
}

export default App
