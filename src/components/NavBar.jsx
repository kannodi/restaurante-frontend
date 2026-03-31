import PropTypes from "prop-types"
function NavBar({ nombreRestaurante = "Restaurante Raul" }) {
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
                </div>
                <button className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 flex justify-end"><a href="/login">Login</a></button>
            </nav>
        </>
    )
}
NavBar.propTypes = {
    nombreRestaurante: PropTypes.string
};

export default NavBar