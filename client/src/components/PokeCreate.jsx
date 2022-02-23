import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { getTypes, crearPoke } from "../actions";

//funcion para validar el form 

function validar(input){
    let errors = {}

    if(!input.name){
        errors.name = "Debe ingresar un nombre"
    } else if(!input.hp || input.hp < 0){
        errors.hp = "Debe ingresar un valor para vida"
    } else if(!input.attack || input.attack < 0){
        errors.attack = "Debe ingresar un valor para fuerza"
    } else if(!input.defense || input.defense < 0){
        errors.defense = "Debe ingresar un valor para defensa"
    } else if(!input.speed || input.speed < 0){
        errors.speed = "Debe ingresar un valor para velocidad"
    } else if(!input.height || input.height < 0 || input.height > 250){
        errors.height = "Debe ingresar un valor para altura"
    } else if(!input.weight || input.weight < 0){
        errors.weight = "Debe ingresar un valor para peso"
    } else if(input.types.length > 2){
        errors.types = "Solo puede marcar dos types para su pokemon"
    }

    return errors
}

export default function PokeCreate(){
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types)
    const [errors, setErrors] = useState({})

    // console.log(types)

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

    useEffect(() =>{
        dispatch(getTypes())
    }, [dispatch])

    /////HANDLE FUNCTIONS//////

    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validar({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleCheckbox(e){
        if(e.target.checked){
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(crearPoke(input))

        alert(`¡Tu poke ${input.name} fue creado!`)
        setInput({
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
    }

    return(
        <div>
            <Link to="/home"><button>Volver</button></Link>{/*puedocolocarunaimagenluego*/}
            <h2>CREA TU POKEMON</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input onChange={e => handleChange(e)} type="text" placeholder="ingresa el nombre" value={input.name} name="name"/>
                    {errors.name && (<p className="error">{errors.name}</p>)}
                    <label>hp:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la vida" value={input.hp} name="hp"/>

                    <label>Attack:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la fuerza" value={input.attack} name="attack"/>

                    <label>Defense:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa defensa" value={input.defense} name="defense"/>

                    <label>Velocidad:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la velocidad" value={input.speed} name="speed"/>

                    <label>Height:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa altura" value={input.height} name="height"/>

                    <label>Weight:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa el peso" value={input.weight} name="weight"/>

                    <label>Imagen:</label>
                    <input onChange={e => handleChange(e)} type="text" placeholder="ingresa URL de una imagen" value={input.img} name="img"/>
                </div>
                <div>
                    <label>Tipos:</label>
                    <div>
                    {
                        types?.map(t => <label><input onClick={(e) =>handleCheckbox(e)} type="checkbox" name={t.name} value={t.name} />{t.name}</label>)
                    }
                    </div>
                    {errors.types && (<p className="error">{errors.types}</p>)}
                </div>
                <button type="submit">Crear pokemon</button>
            </form>
        </div>
    )
}