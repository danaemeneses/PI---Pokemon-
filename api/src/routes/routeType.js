const { Router } = require('express');
const axios = require("axios")
const router = Router()
const {Type} = require("../db")

// GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get("/", async (req, res, next) =>{
    let typesenDB = await Type.findAll()

    try {
        if(typesenDB.length === 0){
            let typesenAPI = await axios.get("https://pokeapi.co/api/v2/type")
            typesenAPI = typesenAPI.data.results.map( t => {return {name : t.name}})
            typesenDB = await Type.bulkCreate(typesenAPI)
         }
         res.send(typesenDB)

    } catch (error) {
        next(error)
    }
})





module.exports = router;