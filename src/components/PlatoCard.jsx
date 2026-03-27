
function PlatoCard({ nombre, categoria, precio, stock, disponible }) {
    return (
        <li className="bg-white shadow-md rounded-xl p-4 " style={{ margin: '16px' }}>
            <h2>{nombre}</h2>
            <p>Categoria: {categoria}</p>
            <p className='text-green-500'>Precio: S/{precio}</p>
            <p>Stock: {stock}</p>
            <p className={disponible ? "text-green-500" : "text-red-500"}>Estado: {disponible ? "disponible" : "agotado"}</p>
        </li>
    );

}

export default PlatoCard