const { Router } = require('express');
const axios = require("axios")
const router = Router()
const {Pokemon, Type} = require("../db")
const {datosDeAPI, infoDeDB} = require("../utils")

router.get("/", async (req, res) =>{
    const {name} = req.query
  
    if(name){
        try {
            const existePKenDB = await Pokemon.findOne({ //compruebo si en mi DB hay un pokemon que coincida con el name pasado por query
                where: {name: name.toLowerCase()},
                include: Type
            })
            
            if(!existePKenDB){ // si ese pokemon no existe en mi DB, lo busco en la API 
                const pokeBuscado = await datosDeAPI(name)
                return res.send(pokeBuscado)
            } 


            const pokeDB = await Pokemon.findOne({  // si ese pokemon SI existe en mi DB, lo busco y traigo todos sus datos 
                where: {name: name.toLowerCase()},
                attributes: ["id", "name", "hp", "img"],
                include: { //incluyendo el Type!!!!!!!!!!! 
                    model: Type, 
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
            return res.send(pokeDB)
        } catch (error) {
            res.status(404).send("pokemon not found" + error)
        }
    } else { // si NO recibo name por query 
        
        //traigo los de la api 
        const apiURL = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40%22"); // llamo solo 40 pokemons 
        const infoPokemon = await apiURL.data.results.map(p =>  { //subrequest a la url para traer los demás datos
            return axios.get(p.url)
        })
        const traerPokemones = await Promise.all(infoPokemon)
        const mostrarPokesAPI = traerPokemones.map(p => { // ACÁ GUARDO TODOS LOS POKEMONS DE LA API 
            return{ //devuelve solo los datos que pide renderizar en la ruta principal
                name : p.data.name,
                img : p.data.sprites.front_default,
                types : p.data.types.map((p) => p.type.name),
                attack: p.data.stats[1].base_stat
            }
            
        })
        const misPokesDB = await Pokemon.findAll({ // ME TRAIGO TODOS LOS POKEMONES DE MI DB
            attributes: ["name", "img", "attack", "hp", "id"],
            include: {
                model: Type, 
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
    })
        

    console.log(misPokesDB)
    const allMyPokes = [...mostrarPokesAPI, ...misPokesDB] // ACÁ JUNTO LOS DE LA DB Y LOS DE LA API 

    res.status(200).send(allMyPokes)
    }
    
})


router.get("/:id", async (req, res, next) =>{
    
    const {id} = req.params
    
    // console.log(id)

    if(id.includes("-")){ // si tiene un id Type uuid, va buscar el poke en mi db 
        try {
            const miPokeDB = await Pokemon.findOne({  // si ese pokemon SI existe en mi DB, lo busco y traigo todos sus datos 
                where: {id},
                attributes: ["id", "name", "hp", "attack", "defense", "speed", "height", "weight", "img"],
                include: { //incluyendo el Type!!!!!!!!!!! 
                    model: Type, 
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })

            if(miPokeDB) {
                return res.send(miPokeDB)
            }
    
            
        } catch (error) {
            next(error)
        }
    } else{ // si el id no incluye guiones, lo va ir a buscar en la pokeapi 
        try {
            const pokeAPI = await datosDeAPI(id)
            res.status(200).send(pokeAPI)
        } catch (error) {
            next(error)
        }
    }
})


//POST

router.post("/", async (req, res) => {
    try {
        const {name, hp, attack, defense, speed, height, weight, img, createdInDB, types} = req.body

        if(!img.length){
            img = "https://assets.thespinoff.co.nz/1/2019/04/HddtBOT.png"
        }

            const [newPokemon, created] = await Pokemon.findOrCreate({
                where: {
                    name,
                    hp,
                    attack,
                    defense,
                    speed, 
                    height, 
                    weight,
                    img,
                    createdInDB: true
                }
            })

    console.log(newPokemon)

        if(!created){
            return res.status(404).send("Ese poke ya existe")
        }

        let tipoPk = await Type.findAll({
            where: {name: types}
        }) 


        console.log(tipoPk)
    
        await newPokemon.setTypes(tipoPk)

        res.status(201).send("Tu poke fue creado")

    } catch (error) {
        res.status(404).send("No se pudo crear tu pokemon" + error)
    }
    
})

module.exports = router;