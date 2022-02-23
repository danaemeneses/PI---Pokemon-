import React from "react";
import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPokes, getTypes, filterPokesbyOrigin, filterByType, orderByName, orderByAttack} from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";


export default function Home (){
    const dispatch = useDispatch()
    const allPokes = useSelector(state => state.pokemons)
    const allTypes = useSelector(state => state.types)

    //estados locales para usar en la paginación
    const [pageActual, setpageActual] = useState(1); // inicio por la página 1 
    const [pkPorPage, setpkPorPage] = useState(12); // cuántos pokes muestro por página 
    const [orden, setOrden] = useState("")
    const indexUltimoPoke = pageActual * pkPorPage // busco el índice del último poke mostrado en esa pag 
    const indexPrimerPoke = indexUltimoPoke - pkPorPage // guarda el primer poke 
    const pokesActuales = allPokes.slice(indexPrimerPoke, indexUltimoPoke)

    const paginado = (numPage) => {
        setpageActual(numPage)
    }


    useEffect(() => {
        dispatch(getPokes())
        dispatch(getTypes())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokes)
    }

    /////////////// handle functions para los filtrados ///////////////////
    // filtrado por origen
    function handleFilterOrigin(e){
        dispatch(filterPokesbyOrigin(e.target.value))
        setpageActual(1)
    }

    // filtrado by type
    function handleFilterType(e){
        dispatch(filterByType(e.target.value))
        setpageActual(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    //ordenado alfabeticamente
    function handleSortAlfa(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setpageActual(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    //ordenado por fuerza
    function handleSortAttack(e){
        e.preventDefault()
        dispatch(orderByAttack(e.target.value))
        setpageActual(1)
        setOrden(`Ordenado ${e.target.value}`)
    }


return(
    <div>
        <Link to="/pokemon">Crear Pokemon</Link>
        <h1> POKE APP </h1>
        <button onClick={e => {handleClick(e)}}> Recargar pokemons </button>
        <div>
            <select onChange={e => handleSortAlfa(e)}>
            <option value="..">Orden por nombre</option>
                <option value="alfA">A-Z</option>
                <option value="alfZ">Z-A</option>
            </select>
            <select onChange={e => handleFilterOrigin(e)}>
                <option value="all">Todos</option>
                <option value="created">Creados</option>
                <option value="existentes">Existentes</option>
            </select>
            <select onChange={e => handleSortAttack(e)}>
                <option value="..">Orden por fuerza</option>
                <option value="menorAmayor">Fuerza ascendente</option>
                <option value="mayorAmenor">Fuerza descendente</option>
            </select >
            <select onChange={e => handleFilterType(e)}>
                <option value="all">Filtrar por tipo</option>
                    {
                        allTypes?.map(type => {
                            return (<option key={type.name} value={type.name}>{type.name}</option>)
                        })
                    }
            </select>
            <div>
                 <Paginado pkPorPage={pkPorPage} allPokes={allPokes.length} paginado={paginado}/>
            </div>
            <SearchBar/>
            {
            pokesActuales?.map(p => {
                return(
                        <div>
                            <Link to={"/home/" + p.id}>
                            <Card key={p.id} name={p.name} img={p.img} attack={p.attack} types={p.types} />
                            </Link>
                        </div>
                )                   
            })
            }
        </div>
    
    </div>
)
}


