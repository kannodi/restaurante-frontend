import PropTypes from "prop-types"
function NavBar( {nombreRestaurante = "Restaurante Raul"}) {
    return (
        <>
            <header>
                <h1>{nombreRestaurante}</h1>
            </header>
            <nav>
                <ul>
                    <li><a href="#">Carta</a></li>
                    <li><a href="#">Mesas</a></li>
                    <li><a href="#">Comandas</a></li>
                </ul>
            </nav>
        </>
    )
}
NavBar.propTypes = {
    nombreRestaurante: PropTypes.string
  };

export default NavBar