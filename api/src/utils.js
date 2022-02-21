
const axios = require("axios")

/////////FUNCIONES CONTROLADORAS 

async function datosDeAPI (valorRecibido) {
    const apiURL = await axios.get(`https://pokeapi.co/api/v2/pokemon/${valorRecibido}`)
    const infoPokemon = {
            id: apiURL.data.id,
            name: apiURL.data.name,
            hp: apiURL.data.stats[0].hp,
            attack: apiURL.data.stats[1].attack,
            defense: apiURL.data.stats[2].defense,
            speed: apiURL.data.stats[5].speed,
            weight: apiURL.data.weight,
            height: apiURL.data.height,
            types: apiURL.data.types.map(p => p.type.name ),
            img: apiURL.data.sprites.other.home.front_default //accedo a la imagen que quiero mostrar 
        }
    
    return infoPokemon
}

 function infoDeDB(valorRecibido){
    const infoPokemonDB = {
        id: valorRecibido.id,
        name: valorRecibido.name,
        hp: valorRecibido.hp,
        attack: valorRecibido.attack,
        defense: valorRecibido.defense,
        speed: valorRecibido.speed,
        weight: valorRecibido.weight,
        height:valorRecibido.height,
        img: valorRecibido.img,
        // types: valorRecibido.type.map(p => p.name )//revisar
    }

    return infoPokemonDB;
}




module.exports = {datosDeAPI, infoDeDB}

