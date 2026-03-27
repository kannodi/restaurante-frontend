//repasar
import { useState } from 'react';
import { mesasMock } from '../data/mesas.mock.js';
import OrderForm from '../components/OrderForm';

const ComandasPages = () => {
    // Usamos un estado para recordar qué mesa seleccionó el mesero [cite: 893-894]
    const [mesaSeleccionada, setMesaSeleccionada] = useState(mesasMock[0].numero);

    const manejarCambioMesa = (event) => {
        setMesaSeleccionada(Number(event.target.value));
    };

    return (
        <div>
            <h1>Toma de Comandas</h1>
            
            {/* Selector de mesa basado en tu mesasMock [cite: 891] */}
            <label>Selecciona una mesa: </label>
            <select value={mesaSeleccionada} onChange={manejarCambioMesa}>
                {mesasMock.map(mesa => (
                    <option key={mesa.id} value={mesa.numero}>
                        Mesa {mesa.numero} ({mesa.estado})
                    </option>
                ))}
            </select>

            <hr />

            {/* Pasamos el número de mesa como prop al formulario [cite: 891] */}
            <OrderForm mesaNumero={mesaSeleccionada} />
        </div>
    );
};

export default ComandasPages;