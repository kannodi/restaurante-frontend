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
import Ordentest from './pages/Ordentest'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta por defecto */}
        <Route path="/" element={<Ordentest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
