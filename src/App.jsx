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
        <Route path="/login" element={<><NavBar /><LoginPage /></>} />
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
