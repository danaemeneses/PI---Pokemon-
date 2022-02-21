import axios from "axios";



export function getPokes(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/pokemons")
        return dispatch({
            type: "GET_POKEMONS",
            payload: json.data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/types")
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
            let json = await axios.get("http://localhost:3001/pokemons?name=" + name)
            return dispatch({
            type: "GET_BY_NAME",
            payload: json.data
        })
        } catch (error) {
            console.log(error)
        }
    }
}