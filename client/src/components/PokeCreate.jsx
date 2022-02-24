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
    } else if(!input.hp){
        errors.hp = "Debe ingresar un valor para vida"
    } else if(input.hp < 0){
        errors.hp = "El valor debe ser mayor a 0"
    } 
        else if(!input.attack){
        errors.attack = "Debe ingresar un valor para fuerza"
    } else if(input.attack < 0){
        errors.attack = "El valor debe ser mayor a 0"
    }
        else if(!input.defense ){
        errors.defense = "Debe ingresar un valor para defensa"
    } else if(input.defense < 0){
        errors.defense = "El valor debe ser mayor a 0"
    }
        else if(!input.speed){
        errors.speed = "Debe ingresar un valor para velocidad"
    } else if(input.defense < 0){
        errors.speed = "El valor debe ser mayor a 0"
    } 
        else if(!input.height){
        errors.height = "Debe ingresar un valor para altura"
    } else if(input.height < 0 || input.height > 250){
        errors.height = "El valor debe ser mayor a 0 y menor a 250"
    } 
        else if(!input.weight || input.weight < 0){
        errors.weight = "Debe ingresar un valor para peso"
    } else if(input.weight < 0 || input.weight > 250){
        errors.weight = "El valor debe ser mayor a 0 y menor a 250"
    } 
        else if((input.types.length) > 2){
        errors.types = "Solo puede marcar dos types para su pokemon"
    }  else if(input.img.lenght > 250){
        errors.name = "La url debe tener un máximo de 250 carácteres"
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

                    <label>HP: </label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la vida" value={input.hp} name="hp"/>
                    {errors.hp && (<p className="error">{errors.hp}</p>)}

                    <label>Attack:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la fuerza" value={input.attack} name="attack"/>
                    {errors.attack && (<p className="error">{errors.attack}</p>)}

                    <label>Defense:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa defensa" value={input.defense} name="defense"/>
                    {errors.defense && (<p className="error">{errors.defense}</p>)}

                    <label>Velocidad:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la velocidad" value={input.speed} name="speed"/>
                    {errors.speed && (<p className="error">{errors.speed}</p>)}

                    <label>Height:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa altura" value={input.height} name="height"/>
                    {errors.height && (<p className="error">{errors.height}</p>)}

                    <label>Weight:</label>
                    <input onChange={e => handleChange(e)} type="number" placeholder="ingresa el peso" value={input.weight} name="weight"/>
                    {errors.weight && (<p className="error">{errors.weight}</p>)}

                    <label>Imagen:</label>
                    <input onChange={e => handleChange(e)} type="text" placeholder="ingresa URL de una imagen" value={input.img} name="img"/>
                    {errors.img && (<p className="error">{errors.img}</p>)}

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
                <div>
                {
                    !(errors.name && errors.hp && errors.attack && errors.defense && errors.speed && errors.height && errors.weight && errors.types && errors.img ) &&
                    <button type="submit">Crear pokemon</button>
                }
                </div>
            </form>
        </div>
    )
}