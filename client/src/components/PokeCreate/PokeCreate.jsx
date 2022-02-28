import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { getTypes, crearPoke } from "../../actions";
import { DivStyled } from "./StyledPokeCreate";

//funcion para validar el form 

function validar(input){
    let errors = {}

    if(!input.name){
        errors.name = "Name is required";
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
        hp:  "",
        attack:  "",
        defense:  "",
        speed:  "", 
        height:  "", 
        weight:  "",
        img:  "",
        types: [],
        createdInDB: true
    })

    useEffect(() =>{
        dispatch(getTypes())
    }, [dispatch])

    console.log(errors)
    /////HANDLE FUNCTIONS//////

    
    function handleChange(e){

        if (e.target.name !== "name") {
            setInput({
              ...input,
              [e.target.name]: Number(e.target.value) <= 0 ? "" : e.target.value,
            });
          } else {
            setErrors(
              validar({
                ...input,
                [e.target.name]: e.target.value,
              })
            );
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            });
          }
        
    }



    function handleCheckbox(e){
        if(input.types.includes(e.target.value)){ // si input.types incluye el valor del checked
            input.types = input.types.filter(t => t !== e.target.value)  // filtra los t que no coincidan 
            setInput({  // guarda solo esos 
                ...input,
                types: input.types
            })
        } else{ // si no guarda todo
            setInput({
            ...input,
            types:  [...input.types, e.target.value]
        })
    }
    }

    // console.log(input.types)

    console.log(input)
 
    function handleSubmit(e){//REVISAR ERR.NAME
        e.preventDefault()
        

        if(input.name === ""){
            alert("Debes ingresar un nombre")
            return;
        }

            dispatch(crearPoke(input)) // despacho la accion de crear poke, mando alert para informar y seteo form a vacio 

        setInput({
            name: "",
            hp:  "",
            attack:  "",
            defense:  "",
            speed:  "", 
            height:  "", 
            weight:  "",
            img: "",
            types: [],
            createdInDB: true
        })
    }

    return(
        <DivStyled>
            <Link to="/home" className="link"><button className="btnback" >Back To Home</button></Link>{/*puedocolocarunaimagenluego*/}
            
           
            <form onSubmit={e => handleSubmit(e)}>
                <div className="contform">
                <h2>CREA TU POKEMON</h2>
                {errors.name && (<p className="error">{errors.name}</p>)}
                    <div className="input-col">
                        <label>Nombre:</label>
                        <input onChange={e => handleChange(e)} type="text" placeholder="ingresa el nombre" value={input.name} name="name"/>
                        

                        <label>HP: </label>
                        <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la vida" value={input.hp} name="hp"/>
                        {/* {errors.hp && (<p className="error">{errors.hp}</p>)} */}

                        <label>Attack:</label>
                        <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la fuerza" value={input.attack} name="attack"/>
                        {/* {errors.attack && (<p className="error">{errors.attack}</p>)} */}

                        <label>Defense:</label>
                        <input onChange={e => handleChange(e)} type="number" placeholder="ingresa defensa" value={input.defense} name="defense"/>
                        {/* {errors.defense && (<p className="error">{errors.defense}</p>)} */}

                        <label>Velocidad:</label>
                        <input onChange={e => handleChange(e)} type="number" placeholder="ingresa la velocidad" value={input.speed} name="speed"/>
                        {/* {errors.speed && (<p className="error">{errors.speed}</p>)} */}

                        <label>Height:</label>
                        <input onChange={e => handleChange(e)} type="number" placeholder="ingresa altura" value={input.height} name="height"/>
                        {/* {errors.height && (<p className="error">{errors.height}</p>)} */}

                        <label>Weight:</label>
                        <input onChange={e => handleChange(e)} type="number" placeholder="ingresa el peso" value={input.weight} name="weight"/>
                        {/* {errors.weight && (<p className="error">{errors.weight}</p>)} */}

                        <label>Imagen:</label>
                        <input onChange={e => handleChange(e)} type="text" placeholder="ingresa URL de una imagen" value={input.img} name="img"/>
                        {/* {errors.img && (<p className="error">{errors.img}</p>)} */}

                    </div>
                    <div>
                        <label>Tipos:</label>
                        <div className="alltypes">
                        {
                            types?.map(t => <label><input key={t.name} type="checkbox" name={t.name} value={t.name} onChange={(e) =>handleCheckbox(e)} />{t.name}</label>)
                        }
                        </div>
                        {(input.types).length > 2 ? <p>Solo puedes elegir 2 types</p> : null}
                    </div>
                    <div>
                     <button className="btnsubmit" type="submit">Crear pokemon</button>
                   
                    </div>
                </div>
            </form>
            
        </DivStyled>
    )
}