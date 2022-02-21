import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../actions";



export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState ("")

    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByName(name))

    }

    return (
        <div>
            <input onChange={e => handleChange(e)} type="text" placeholder="Buscar pokemón"/>
            <button type="submit" onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
}