import { useState, useEffect } from 'react';
import PlatoCard from '../components/PlatoCard';
import { getPlatos } from '../services/api';

function Home() {
  const [platos, setPlatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarPlatos() {
      try {
        setLoading(true);
        const data = await getPlatos();
        setPlatos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    cargarPlatos();
  }, []);

  if (loading) return <p className='text-blue-500 animate-pulse m-4'>Cargando la carta...</p>;
  if (error) return <p className='bg-red-100 text-red-500 m-4'>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl text-yellow-300 font-bold mb-3 m-4">Carta del Restaurante</h1>
      <ul>
        {platos.map(plato => (
          <PlatoCard
            key={plato._id || plato.id}
            nombre={plato.nombre}
            categoria={plato.categoria}
            precio={plato.precio}
            stock={plato.stock}
          />
        ))}
      </ul>
    </div>
  )
}

export default Home