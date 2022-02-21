
const initialState = {
    pokemons: [],
    allPokemones: [],
    types: []
}

function rootReducer(state = initialState, action) {

switch(action.type){
    case "GET_POKEMONS": 
    return {
        ...state,
        pokemons: action.payload,
        allPokemones: action.payload
    }

    case "GET_TYPES":
        return{
            ...state, 
            types: action.payload
        }

    
    case "FILTER_BY_TYPE":

        const misPokes = state.allPokemones
        const typesBuscado = action.payload === "all" ? misPokes : misPokes.filter(p => {
            if(typeof p.types[0] !== "string"){
                p.types = p.types.map(t => t.name)
            } else {
                p.types = p.types 
            }
            return p.types.includes(action.payload)
        }) // que incluya porque puede tener más de un tipo


        return{
            ...state, 
            pokemons: typesBuscado
        }



    case "FILTER_BY_ORIGIN":
       
        const origenesFilt = action.payload === "all" ? state.allPokemones : action.payload === "existentes" ?  state.allPokemones.filter(p => !p.createdInDB) : state.allPokemones.filter(p => p.createdInDB)

        return{
            ...state,
            pokemons: action.payload === "all" ? state.allPokemones : origenesFilt
        }


    case "ORDER_BY_NAME":
        let sortArray = action.payload === "alfA" ?
            state.pokemons.sort(function (a, b) {
            if (a.name > b.name){
                return 1
            }
            if(b.name > a.name){
                return -1
            }
            return 0
        }) : 
        state.pokemons.sort(function (a,b){
            if(a.name > b.name){
                return -1
            } 
            if(b.name > a.name){
                return 1
            }
        })
        return{
            ...state,
            pokemons: sortArray
        }


        case "ORDER_BY_ATTACK":
        let sortArrayAttack = action.payload === "menorAmayor" ?
            state.pokemons.sort(function (a, b) {
            if (a.attack > b.attack){
                return 1
            }
            if(b.attack > a.attack){
                return -1
            }
            return 0
        }) : 
        state.pokemons.sort(function (a,b){
            if(a.attack > b.attack){
                return -1
            } 
            if(b.attack > a.attack){
                return 1
            }
        })
        return{
            ...state,
            pokemons: sortArrayAttack
        }


    case "GET_BY_NAME": 
    return{
        ...state,
        pokemons: action.payload
    }

    default: 
    return state

    

    
    
}

}

export default rootReducer;