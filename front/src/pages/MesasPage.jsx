// pages/MesasPage.jsx
import { mesasMock } from '../data/mesas.mock.js'
import MesaCard from '../components/MesaCard'

function MesasPage() {
  return (
    <div>
      <h1>Mesas del Restaurante</h1>
      <ul>
        {mesasMock.map(mesa => (
          <MesaCard
            key={mesa.id}
            numero={mesa.numero}
            capacidad={mesa.capacidad}
            estado={mesa.estado}
            comensales={mesa.comensales}
          />
        ))}
      </ul>
    </div>
  )
}

export default MesasPage