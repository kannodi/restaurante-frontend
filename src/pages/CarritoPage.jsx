import { useState, useEffect } from 'react';
import { getPlatos } from '../services/api';

export default function CarritoPage() {
    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function cargarDatos() {
            try {
                setLoading(true);
                const data = await getPlatos();
                if (!Array.isArray(data)) {
                    throw new Error("La respuesta de la API no es válida (verifica VITE_API_URL)");
                }
                setPlatos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        cargarDatos();
    }, []);

    if (loading) return <p className='text-blue-500 animate-pulse m-4'>Cargando la carrito...</p>;
    if (error) return <p className='bg-red-100 text-red-500 m-4'>Error: {error}</p>;


    function agregarPlato(plato) {
        const existe = carrito.find((item) => item._id === plato._id);
        if (existe) {
            setCarrito(carrito.map((item) =>
                item._id === plato._id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            ));
        } else {
            setCarrito([...carrito, { ...plato, cantidad: 1 }]);
        }
    }


    function quitarPlato(_id) {
        setCarrito(carrito.filter((item, indexActual) => indexActual !== _id));
    }

    function restarPlato(platoInput) {
        // Buscamos el plato que queremos restar
        const platoEnCarrito = carrito.find((item) => item._id === platoInput._id);
        if (platoEnCarrito.cantidad === 1) {
            // Si solo queda 1 y le damos a restar, quitamos el plato completamente del arreglo
            setCarrito(carrito.filter((item) => item._id !== platoInput._id));
        } else {
            // Si hay más de 1, simplemente le restamos -1 a su cantidad actual
            setCarrito(carrito.map((item) =>
                item._id === platoInput._id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            ));
        }
    }
    function limpiarCarrito() {
        setCarrito([]);
    }
    //const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    function total() {
        let total = 0;
        carrito.forEach(item => {
            total += item.precio * item.cantidad;
        });
        return total;
    }
    return (
        <div className='m-10 flex flex-col gap-2 justify-start'>
            <h2 className='bg-blue-400 text-white text-2xl font-bold p-2 rounded-xl mb-2'> 🧾Armar Comanda</h2>
            <div className='grid grid-cols-2 gap-6'>

                {/* Columna izquierda — platos */}
                <div className='flex flex-col gap-3'>
                    {platos.map(plato => (
                        <div className='flex justify-between items-center' key={plato._id}>
                            <strong className='px-2 py-1'>{plato.nombre} — S/ {plato.precio}</strong>
                            <button className='bg-gray-200 rounded-xl px-2 py-1' onClick={() => agregarPlato(plato)}>Agregar</button>
                        </div>
                    ))}
                </div>

                {/* Columna derecha — carrito */}
                <div className='flex flex-col gap-2'>
                    <h2 className='bg-yellow-400 text-white text-md font-bold p-2 rounded-xl mb-2'>🛒 Carrito</h2>
                    <span className='flex justify-between items-center'><h3>Total de pedidos: ({carrito.length})</h3> <button className='border border-red-400 rounded-xl hover:bg-red-400 hover:text-white px-2 py-1' onClick={limpiarCarrito}>Limpiar Carrito</button></span>
                    {carrito.map((item, index) => (
                        <div className='grid grid-cols-4 justify-between items-center m-2' key={index}>
                            <strong>{item.nombre}</strong>
                            <div className='flex justify-between items-center'>
                                <button className='bg-gray-200 rounded-full px-2 py-1' onClick={() => restarPlato(item)}> - </button>
                                <span>{item.cantidad}</span>
                                <button className='bg-gray-200 rounded-full px-2 py-1' onClick={() => agregarPlato(item)}> + </button>
                            </div>
                            <strong className='text-center'> S/ {item.precio * item.cantidad}</strong>
                            <button onClick={() => quitarPlato(index)}>🗑️</button>
                        </div>
                    ))}
                    <strong>Total: S/ {total()}</strong>
                </div>

            </div>
        </div>
    );
}
