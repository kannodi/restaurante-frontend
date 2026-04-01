import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import CartaPage from './pages/CartaPage'
import MesasPage from './pages/MesasPage'
import NavBar from './components/NavBar'
import ComandasPages from './pages/ComandasPage'
import CarritoPage from './pages/CarritoPage'
import MenuPage from './pages/MenuPage'
import LoginPage from './pages/LoginPage'
import { Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'//


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta por defecto */}
        <Route path="/" element={<Navigate to='/login' replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/carta" element={<ProtectedRoute><CartaPage /></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
        <Route path="/carrito" element={<ProtectedRoute><CarritoPage /></ProtectedRoute>} />
        <Route path="/mesas" element={<ProtectedRoute><MesasPage /></ProtectedRoute>} />
        <Route path="/comandas" element={<ProtectedRoute><ComandasPages /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
