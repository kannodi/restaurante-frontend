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

    if (loading) return <p>Cargando menú...</p>;
    if (error) return <p>Error: {error} — verifica que el backend está corriendo.</p>;


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

    //const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    return (
        <div>
            <h2>Armar Comanda</h2>
            {platos.map(plato => (
                <div key={plato._id}>
                    <span>{plato.nombre} — S/ {plato.precio}</span>
                    <button onClick={() => agregarPlato(plato)}>Agregar</button>
                </div>
            ))}
            {carrito.map((item, index) => (
                <div key={index}>
                    <span>{item.nombre} X {item.cantidad} Total: S/ {item.precio * item.cantidad}</span>
                    <button onClick={() => restarPlato(item)}>Limpiar comanda</button>
                    <button onClick={() => quitarPlato(index)}>Quitar</button>
                </div>
            ))}
            <h3>Comanda ({carrito.length} ítems)</h3>
        </div>
    );
}
