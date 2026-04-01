import React, { useState } from 'react';

/* =========================================================
 * VERSIÓN ANTIGUA (Componente de Clase / Legacy)
 * Esta es la forma "antigua" de manejar estado en React (antes de 2019).
 * Actualmente ya NO se recomienda usar Clases, sino Componentes Funcionales.
 * Utiliza 'this.state' para guardar datos y 'this.setState' para actualizarlos.
 * ========================================================= */
class OrderFormLegacy extends React.Component {
    constructor(props) {
        super(props);
        // Se inicializa el estado global de la clase con 'mesa' y 'items'
        this.state = { mesa: "", items: [] };
    }
    
    // Función para agregar un item a la lista
    agregarItem(item) {
        // Modifica el estado copiando todos los items anteriores (...this.state.items) y sumando el nuevo
        this.setState({ items: [...this.state.items, item] });
    }

    // Renderiza la vista del componente (es obligatorio en los de clase)
    render() {
        return <div>{this.state.mesa}</div>;
    }
}


/* =========================================================
 * VERSIÓN MODERNA (Componente Funcional con Hooks)
 * Hoy en día, React usa componentes funcionales (simples funciones de JS).
 * Para manejar el estado interno, se utilizan "Hooks", específicamente 'useState'.
 * ========================================================= */
const OrderForm = () => {
    // Aquí es donde entra en acción el HOOK 'useState'.
    // useState permite que un componente cree y guarde sus propios datos dinámicos.
    // Retorna un arreglo de dos partes: 
    // 1. La variable actual ('mesa' o 'items')
    // 2. La función que usaremos para actualizar el valor ('setMesa' o 'setItems')

    const [mesa, setMesa] = useState("");
    const [items, setItems] = useState([]);

    // Función moderna equivalente a agregarItem(item) de arriba
    const agregarItem = (item) => {
        // En lugar de llamar a this.setState, llamamos directamente a la función 'setItems'
        // Copiamos los items actuales ([...items]) y agregamos el "item" al final.
        setItems([...items, item]);
    };

    // Un componente funcional simplemente retorna lo que mostrará en pantalla
    return <div>{mesa}</div>;
};

// Exportamos el componente moderno usando el mismo nombre 'OrderForm'
export default OrderForm;