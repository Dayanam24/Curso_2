import { useState, useEffect } from "react";

const ApiFetch = () => {

    const [personajes, setPersonajes] = useState([]);
    const [nombre, setNombre] = useState("No Definido");

    useEffect(
        () => {
            fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((response) => {setPersonajes(response.results)})
            .then(() => console.table(personajes));
        },[nombre]
    );


    return ( 
        <>
            <h1>Api Fetch (No-Key)</h1>
            <button onClick={() => setNombre("Diego Rodriguez")}>consultar datos</button>
            <ul>
                {personajes.map((personaje) => (
                    <li style={{color:"blue", fontSize:"20px", fontWeight:"bold"}} key={personaje.id}>
                            ID: {personaje.id} | Nombre: {personaje.name} | Estado: {personaje.status} | Género: {personaje.gender} | Localizacion: {personaje.location.name}
                    </li>
                ))}
            </ul>
        </> 
    );
} 

export default ApiFetch;