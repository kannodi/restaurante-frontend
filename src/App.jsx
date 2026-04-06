import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'//RUTA PROTEGIDA
import { Navigate } from 'react-router-dom' //NAVEGACION
import NavBar from './components/NavBar'
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import CartaPage from './pages/CartaPage'
import MesasPage from './pages/MesasPage'
import ComandasPages from './pages/ComandasPage'
import CarritoPage from './pages/CarritoPage'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta por defecto */}
        <Route path="/" element={<Navigate to='/login' replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/carta" element={<CartaPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/mesas" element={<MesasPage />} />
        <Route path="/comandas" element={<ComandasPages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
