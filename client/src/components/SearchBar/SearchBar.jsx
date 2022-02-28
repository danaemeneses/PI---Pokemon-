import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../actions";
import {DivStyled} from "./Styled"



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
        <DivStyled>           
            <div>
                <input className="input-search" type="text" value={name} placeholder="Search pokemon" onChange={(e) => handleChange(e)}/>
                <button className="btn-search" type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
            </div>
        </DivStyled>

    )
}