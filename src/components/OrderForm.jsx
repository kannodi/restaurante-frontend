// repasar
import { useState, useEffect } from 'react';

const OrderForm = ({ mesaNumero }) => {

    // PASO 2 — El constructor y this.state se convierten en useState
    // (un useState por cada campo de estado independiente)
    const [plato, setPlato] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    // PASO 3 — Los handlers pierden el this y el .bind()
    // no hay bind — las funciones son closures que acceden al estado
    const handleChange = (event) => {
        // Maneja cualquier cambio en los inputs del formulario
        const { name, value } = event.target;

        // ¿Cómo traducen el [name]: value del this.setState?
        // Pista: cada campo tiene su propio setter ahora
        if (name === "plato") setPlato(value);
        if (name === "cantidad") setCantidad(value);
    };

    const handleSubmit = (event) => {
        // Maneja el envio del formulario
        event.preventDefault();
        setEnviando(true);
        setMensaje("");

        // Simula envio a la API (async/await del Sprint 0)
        setTimeout(() => {
            setEnviando(false);
            // Mensaje de confirmación usando el estado actual
            setMensaje(`Comanda enviada: ${plato} x${cantidad}`);
            // Limpiamos los campos para una nueva entrada
            setPlato("");
            setCantidad(1);
        }, 1500);
    };

    // PASO 4 — componentDidMount se convierte en useEffect con []
    useEffect(() => {
        // Se ejecuta una sola vez cuando el componente aparece en pantalla
        console.log("OrderForm montado — mesa:", mesaNumero);
    }, [mesaNumero]); // [] = solo al montar

    // PASO 6 — render() desaparece, el return va directo
    return (
        // El JSX es idéntico — solo cambia this.props por mesaNumero
        // y this.state.plato por plato, this.state.enviando por enviando, etc.
        <form onSubmit={handleSubmit}>
            <h2>Comanda — Mesa {mesaNumero}</h2>

            <input
                name="plato"
                value={plato}
                onChange={handleChange}
                placeholder="Nombre del plato"
            />

            <input
                type="number"
                name="cantidad"
                value={cantidad}
                onChange={handleChange}
                min="1"
            />

            <button type="submit" disabled={enviando}>
                {/* Renderizado condicional del texto del botón */}
                {enviando ? "Enviando..." : "Agregar a comanda"}
            </button>

            {/* Muestra el mensaje solo si existe (Short-circuit evaluation) */}
            {mensaje && <p>{mensaje}</p>}
        </form>
    );
};

export default OrderForm;