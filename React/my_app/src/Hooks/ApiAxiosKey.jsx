import axios from 'axios';
import { useEffect, useState } from 'react';

const ApiAxiosKey = () => {

    const [listaJuegos, setListaJuegos] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {platform: 'all'}, // pc, browser, all
        headers: {
            'X-RapidAPI-Key': '801c3e0640mshb12ea04d0f4c1b4p10674ajsna508bbea0718',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    async function obtenerDatos(){
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setListaJuegos(response.data);  
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        obtenerDatos();
    },[]);

    return ( 
        <>
            <h1>ApiAxiosKey</h1>
            <div className='grid grid-cols-4 gap-3'>
                {listaJuegos.map((juego) => (
                    <div key={juego.id}>
                        <img src={juego.thumbnail} alt="" />
                        <p>{juego.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ApiAxiosKey;