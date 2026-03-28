import PropTypes from "prop-types"
function NavBar({ nombreRestaurante = "Restaurante Raul" }) {
    return (
        <>
            <header>
                <h1 className='text-yellow-400 text-4xl p-7' align='center' width='100%' height='100%'>{nombreRestaurante}</h1>
            </header>
            <nav className="flex flex-col mb-5 ">
                <ul className=' bg-white gap-2 '>
                    <span className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 "><a href="#">Carta</a></span>
                    <span className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 "><a href="#">Mesas</a></span>
                    <span className=" bg-blue-200 text-blue-400 font-bold text-xl rounded-full px-1 py-1 w-fit m-2 "><a href="#">Comandas</a></span>
                </ul>
            </nav>
        </>
    )
}
NavBar.propTypes = {
    nombreRestaurante: PropTypes.string
};

export default NavBar