import axios from "axios";



export function getPokes(){
    return async function(dispatch){
        let json = await axios.get("/pokemons")
        return dispatch({
            type: "GET_POKEMONS",
            payload: json.data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        let json = await axios.get("/types")
        return dispatch({
            type: "GET_TYPES",
            payload: json.data
        })
    }
}

export function filterByType(payload){
    return{
        type: "FILTER_BY_TYPE",
        payload
    }
}

export function filterPokesbyOrigin(payload){
    return{
        type: "FILTER_BY_ORIGIN",
        payload
    }
}


export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByAttack(payload){
    return{
        type: "ORDER_BY_ATTACK",
        payload
    }
}

export function getByName(name){
    return async function(dispatch){
        try {
            var json = await axios.get("/pokemons?name=" + name)           
        } catch (error) {
            console.log(error)
        } finally{
            if(json){
                return dispatch({
                    type: "GET_BY_NAME",
                    payload: json.data
                })
            } else{
                return alert("This pokemon doesn't exists")
            }
        } 
    }
}

//DETAIL DE POKES
export function detailsPoke(id){
    return async function(dispatch){
        try {
            let response = await axios.get(`/pokemons/${id}`)
            return dispatch({
                type: "DETAILS_POKEMON",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


//PARA CREAR POKE 
export function crearPoke(payload){
    return async function(dispatch){
        const data = await axios.post("/pokemons", payload)
        return data
        // return dispatch({
        //     type: "POST_POKEMON",
        //     payload: data
        // })
    }
}
