import { platosMock } from '../data/platos.mock.js'
import PlatoCard from '../components/PlatoCard'

function Home() {
  return (
    <div>
      <h1>Carta del Restaurante</h1>
      <ul>
        {platosMock.map(plato => (
          <PlatoCard
            key={plato.id}
            nombre={plato.nombre}
            categoria={plato.categoria}
            precio={plato.precio}
            stock={plato.stock}
            disponible={plato.disponible}
          />
        ))}
      </ul>
    </div>
  )
}

export default Home