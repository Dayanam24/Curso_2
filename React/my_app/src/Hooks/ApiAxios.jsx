import axios from "axios";
import {useEffect, useState} from "react";

const ApiAxios = () => {
    const [personaje, setPersonaje] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [localizacion, setLocalizacion] = useState("");
    const [origen, setOrigen] = useState("");

    /*
        Almacenar el estado de personajes utilizando el hook useState en este caso la funcion setPersonajes
        y actualizar su valor dentro de la función obtenerDatos() una vez que se ha obtenido la respuesta
        de la API. 
        Entonces, cuando personajes se actualiza, React volverá a renderizar el componente
        y mostrará los datos obtenidos.
    */

    async function obtenerDatos(){
        try{
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${pagina}`);
            console.table(res.data.image); 

            if(res.status === 200){
                setPersonaje(res.data);
                setLocalizacion(res.data.location.name);
                setOrigen(res.data.origin.name);
            }

        }catch(error){
            console.log(`Ocurrio un error: ${error}`);
        }
    }

    useEffect(()=>{
        obtenerDatos();
    },[pagina]);

    const estilos = {
        Main: "flex flex-col h-[96.2vh] w-[100vw] items-center justify-center gap-8 bg-gradient-to-b from-green-400 to-green-900" ,
        textos: "grid grid-cols-2 gap-4" ,
        Caja: "bg-white/20 flex items-center pl-0 h-[auto] pl-4 rounded-2xl shadow-[-7px_15px_15px_3px_rgba(0,0,0,0.3)]",
        Imagen: "rounded-r-lg w-[180px] h-[180px] shadow-md shadow-stone-900 ml-6",
        Parrafo: "text-white w-[300px] drop-shadow-lg",
        Span: "hover:text-orange-800",
        Boton: "bg-white/25 rounded-full text-white font-['roboto'] p-2 shadow-[-3px_8px_10px_3px_rgba(0,0,0,0.3)]"
    };

    return (
        <main className={estilos.Main}>
            <span style={{textAlign: "center"}} className={estilos.Parrafo}>ID: {personaje.id}</span>
            {/* Informacion del peronaje */}
            <div className={estilos.Caja}>
                <div className={estilos.textos}>
                    <p className={estilos.Parrafo}><span className={estilos.Span}>Nombre:</span> {personaje.name}</p>
                    <p className={estilos.Parrafo}><span className={estilos.Span}>Especie:</span> {personaje.species}</p>
                    <p className={estilos.Parrafo}><span className={estilos.Span}>Genero:</span> {personaje.gender}</p>
                    <p className={estilos.Parrafo}><span className={estilos.Span}>Status:</span> {personaje.status}</p>
                    <p className={estilos.Parrafo}><span className={estilos.Span}>Localización:</span> {localizacion}</p>
                    <p className={estilos.Parrafo}><span className={estilos.Span}>Origen:</span> {origen}</p>
                </div>
                <img className={estilos.Imagen} src={personaje.image} alt="" />
            </div>

            {/* Botones de paginacion */}
            <div className="flex gap-4">
            
                {/* Boton Primero */}
                <button 
                    className={estilos.Boton}
                    onClick={ ()=> setPagina(1)}>
                        Primero
                </button>


                {/* Boton Anterior */}
                <button 
                    className={estilos.Boton}
                    onClick={
                        ()=> (pagina <= 1) ? setPagina(826) : setPagina(pagina - 1)
                    }
                    >
                        Anterior
                </button>


                {/* Boton Siguiente */}
                <button 
                    className={estilos.Boton}
                    onClick={
                        ()=> (pagina >= 826) ? setPagina(1) : setPagina(pagina + 1)
                    }
                >
                    Siguiente
                </button>


                {/* Boton Ultimo */}
                <button 
                    className={estilos.Boton}
                    onClick={()=> setPagina(826)}
                    >
                        Ultimo
                </button>
            
            </div>
        </main>
    );
}

export default ApiAxios;