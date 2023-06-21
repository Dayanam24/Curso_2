/*
    Se importa NavLink desde react-router-dom para poder trabajar las rutas y aprovechar la propiedad 
    isActive para mutar el documento cuando la ruta indicada este activa.
*/
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    // Funcion que retorna un objeto: (parametro)=>({key: value})
    // Para cambiar de color si la ruta esta activa
    //Nota: isActive es una palabra reservada.

    function cambiarColor({isActive}){
        return {
            color: isActive ? "#0E182D" : '#b56000',
            textDecoration: "none",
            fontSize: "20px"
        }
    }



    return ( 
        // Para asignar estilos en la propiedad style se hacen dentro de {{}}
        <nav style={{display:'flex', justifyContent: 'flex-end', gap: '10px'}}>
            <span>
                <NavLink to="/" style={cambiarColor}>Root</NavLink>
            </span>
            <span>
                <NavLink to="/home" style={cambiarColor}>Home</NavLink>
            </span>
            <span>
                <NavLink to="/carrito" style={cambiarColor}>Carrito</NavLink>
            </span>
            <span>
                <NavLink to="/ApiAxios" style={cambiarColor}>Api Individual</NavLink>
            </span>
            <span>
                <NavLink to="/ApiAxiosMap" style={cambiarColor}>Api Mapeo</NavLink>
            </span>
            <span>
                <NavLink to="/ApiAxiosKey" style={cambiarColor}>Api Key</NavLink>
            </span>
        </nav>
    );
}

export default Navbar;