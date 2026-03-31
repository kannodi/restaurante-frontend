// 1. Datos iniciales (Nuestra "base de datos" de platos)
const platosDisponibles = [
    { id: 1, nombre: "Lomo Saltado", precio: 25 },
    { id: 2, nombre: "Arroz con Pollo", precio: 20 },
    { id: 3, nombre: "Ceviche", precio: 30 },
];

export default function PedidoTest() {
    // 2. Estados (Variables que cambian en la pantalla)
    const [platoSeleccionado, setPlatoSeleccionado] = useState(null); // Guarda el objeto del plato elegido
    const [cantidad, setCantidad] = useState(1);                      // Guarda la cantidad que queremos
    const [carrito, setCarrito] = useState([]);                       // Nuestra lista de compras

    // 3. Funciones de lógica

    // Función cuando seleccionamos un plato en la lista desplegable
    const seleccionarPlato = (event) => {
        const id = parseInt(event.target.value);
        const platoEncontrado = platosDisponibles.find(p => p.id === id);
        setPlatoSeleccionado(platoEncontrado || null);
    };

    // Función para meter el plato al carrito
    const agregarAlCarrito = () => {
        if (!platoSeleccionado) return; // Si no hay nada seleccionado, no hace nada

        const itemParaCarrito = {
            idUnico: Date.now(), // Un ID para que React no se confunda
            nombre: platoSeleccionado.nombre,
            cantidad: cantidad,
            precioUnitario: platoSeleccionado.precio,
            subtotal: platoSeleccionado.precio * cantidad
        };

        // Guardamos en el carrito (lo que ya había + el nuevo item)
        setCarrito([...carrito, itemParaCarrito]);
    };

    // Cálculo del total de todo el carrito
    const totalVenta = carrito.reduce((acumulado, item) => acumulado + item.subtotal, 0);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Mi Carrito Simple</h1>

            {/* --- SECCIÓN DE SELECCIÓN --- */}
            <div>
                <p>1. Elige un plato:</p>
                <select onChange={seleccionarPlato}>
                    <option value="">-- Selecciona --</option>
                    {platosDisponibles.map(plato => (
                        <option key={plato.id} value={plato.id}>
                            {plato.nombre} (${plato.precio})
                        </option>
                    ))}
                </select>

                <p>2. Cantidad:</p>
                <input
                    type="number"
                    value={cantidad}
                    min="1"
                    onChange={(e) => setCantidad(parseInt(e.target.value) || 1)}
                />

                <br /><br />
                <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
            </div>

            <hr />

            {/* --- SECCIÓN DEL CARRITO --- */}
            <div>
                <h2>Carrito Actual</h2>
                {carrito.length === 0 ? (
                    <p>No hay elementos todavía.</p>
                ) : (
                    <ul>
                        {carrito.map((item) => (
                            <li key={item.idUnico}>
                                {item.nombre} x {item.cantidad} = <b>${item.subtotal}</b>
                            </li>
                        ))}
                    </ul>
                )}

                <h3>TOTAL A PAGAR: ${totalVenta}</h3>
            </div>
        </div>
    );
}