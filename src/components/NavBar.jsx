import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
function NavBar({ nombreRestaurante = "Restaurante Raul" }) {
    const navigate = useNavigate();
    const [sesion, setSesion] = useState(!!localStorage.getItem('token'));
    //si hay token en el localstorage, setSesion a true
    useEffect(() => {
        const token = localStorage.getItem('token');
        setSesion(!!token);
    }, []);

    //cerrar sesion eliminando en token del localstorage
    const botonLogout = () => {
        if (confirm('¿Estas seguro de cerrar sesión?')) {
            localStorage.removeItem('token');
            setSesion(false);
            navigate('/login');
        }
    }

    return (
        <>
            <header>
                <h1 className='text-yellow-400 text-4xl p-7' align='center' width='100%' height='100%'>{nombreRestaurante}</h1>
            </header>
            <nav className="flex items-center justify-between px-7 mb-5">
                <div className=' flex gap-2'>
                    <button className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 "><a href="/carta">Carta</a></button>
                    <button className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 "><a href="/mesas">Mesas</a></button>
                    <button className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 "><a href="/comandas">Comandas</a></button>
                    <button className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 "><a href="/carrito">Carrito</a></button>
                    <button className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 "><a href="/menu">Menu</a></button>
                </div>
                <div>
                    {sesion ? (
                        <button onClick={botonLogout} className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 flex justify-end"><a href="/login">Logout</a></button>
                    ) : (
                        <button className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 flex justify-end"><a href="/login">Login</a></button>
                    )}
                </div>
            </nav>
        </>
    );
}

NavBar.propTypes = {
    nombreRestaurante: PropTypes.string
};

export default NavBar