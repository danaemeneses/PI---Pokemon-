import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useHistory} from "react-router-dom"
import { getTypes, crearPoke } from "../actions";

export default function CrearPokemon(){
    const dispatch = useDispatch;
    const types = useSelector((state) => state.types)

    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "", 
        height: "", 
        weight: "",
        img: "",
        types: [],
        createdInDB: true
    })

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])


    return(
        <div>
            <Link to="/home"><button>Volver</button></Link>{/*puedocolocarunaimagenluego*/}
            <h2>CREA TU POKEMON</h2>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input type="text" placeholder="ingresa el nombre" value={input.name} name="name"/>

                    <label>hp:</label>
                    <input type="number" placeholder="ingresa la vida" value={input.hp} name="hp"/>

                    <label>Attack:</label>
                    <input type="number" placeholder="ingresa la fuerza" value={input.attack} name="attack"/>

                    <label>Defense:</label>
                    <input type="number" placeholder="ingresa defensa" value={input.defense} name="defense"/>

                    <label>Velocidad:</label>
                    <input type="number" placeholder="ingresa la velocidad" value={input.speed} name="speed"/>

                    <label>Height:</label>
                    <input type="number" placeholder="ingresa altura" value={input.height} name="height"/>

                    <label>Weight:</label>
                    <input type="number" placeholder="ingresa el peso" value={input.weight} name="weight"/>

                    <label>Imagen:</label>
                    <input type="text" placeholder="ingresa URL de una imagen" value={input.img} name="img"/>
                </div>
                <div>
                    <label>Tipos:</label>
                    <input type="checkbox"/>
                </div>
            </form>
        </div>
    )
}