// Realizamos una solicitud tipo GET con Axios a la api de Rick and Morthy
axios.get("https://rickandmortyapi.com/api/character/1")
.then(
    (respuesta)=> { console.log(respuesta) }
)
.catch(
    (error)=>{ console.log(error) }
)