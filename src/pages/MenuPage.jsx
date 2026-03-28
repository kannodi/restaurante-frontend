import { useState, useEffect } from 'react';
import { getPlatos } from '../services/api';

export default function MenuPage() {
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function cargarMenu() {
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
        cargarMenu();
    }, []);

    if (loading) return <p className='text-blue-500 animate-pulse'>Cargando el menú del restaurante...</p>;
    if (error) return <p className='bg-red-100 text-red-500'>Error: {error} — verifica que el backend está corriendo.</p>;

    return (
        <div className="bg-gray-50 p-6 rounded-lg m-4 flex flex-col gap-2 ">
            <h2 className="text-2xl text-yellow-300 font-bold mb-3">Menú del Restaurante</h2>
            {platos.map(plato => (
                <div className='grid grid-cols-4' key={plato._id}>
                    <strong>{plato.nombre}</strong> <span className='bg-blue-100 rounded-full  text-blue-500 w-fit'>{plato.categoria}</span> <span className='text-green-600 font-semibold text-lg'>— S/ {plato.precio}</span> <span className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${plato.stock > 0
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-500'
                        }`}>
                        {plato.stock > 0 ? '✅ Disponible' : '❌ Agotado'}
                    </span>
                </div>
            ))}
        </div>
    );
}
