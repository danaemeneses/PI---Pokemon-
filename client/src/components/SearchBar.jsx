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
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByName(name.toLowerCase()))
        setName("")

    }

    return (
        <div>
            <input type="text" value={name} placeholder="Buscar pokemón" onChange={(e) => handleChange(e)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )
}