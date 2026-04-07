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
      <Routes>
        {/* Ruta por defecto */}
        <Route path="/" element={<Navigate to='/login' replace />} />
        <Route path="/login" element={<><LoginPage /></>} />
        <Route path="/carta" element={<ProtectedRoute><NavBar /><CartaPage /></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute><NavBar /><MenuPage /></ProtectedRoute>} />
        <Route path="/carrito" element={<ProtectedRoute><NavBar /><CarritoPage /></ProtectedRoute>} />
        <Route path="/mesas" element={<ProtectedRoute><NavBar /><MesasPage /></ProtectedRoute>} />
        <Route path="/comandas" element={<ProtectedRoute><NavBar /><ComandasPages /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
