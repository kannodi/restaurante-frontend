
function PlatoCard({ nombre, categoria, precio, stock, disponible }) {
    return (
        <li>
            <h2>{nombre}</h2>
            <p>Categoria: {categoria}</p>
            <p>Precio: S/{precio}</p>
            <p>Stock: {stock}</p>
            <p>Estado: {disponible ? "disponible" : "agotado"}</p>
        </li>
    );

}

export default PlatoCard