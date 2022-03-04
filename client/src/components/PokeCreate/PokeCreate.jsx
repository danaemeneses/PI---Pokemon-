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

    useEffect(() => {
        setErrors(validar(input))
    }, [input])



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

    function handleSubmit(e){//REVISAR ERR.NAME
        e.preventDefault()
        
        if(Object.keys(errors).length){
           alert(Object.values(errors))
        } else{

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
    }

    return(
        <DivStyled>
            <Link to="/home" className="link"><button className="btnback" >Back To Home</button></Link>{/*puedocolocarunaimagenluego*/}
            
           
            <form onSubmit={e => handleSubmit(e)}>
                <div className="contform">
                <h2>CREATE YOUR OWN POKEMON</h2>
    
                    <div className="input-col">
                    
                        <label>Name:</label>
                        {errors.name && (<p className="error">{errors.name}</p>)}
                        <input onChange={e => handleChange(e)} type="text" placeholder="ingresa el nombre" value={input.name} name="name" autoComplete="off"/>
                        

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

                        <label>Image:</label>
                        <input onChange={e => handleChange(e)} type="text" placeholder="ingresa URL de una imagen" value={input.img} name="img"/>
                        {(input.img).length > 250 ? <p className="errortypes">URL cant have more than 250 characters </p> : null}
                        
                    </div>
                    <div>
                        <label>Types:</label>
                        {(input.types).length === 0 ? <p className="errortypes">Select types! </p> : (input.types).length > 2 ? <p className="errortypes"> Max types : 2 </p>: null}
                        <div className="alltypes">
                        {
                            types?.map(t => <label><input key={t.name} type="checkbox" name={t.name} value={t.name} onChange={(e) =>handleCheckbox(e)} />{t.name}</label>)
                        }
                        </div>
                       
                    </div>
                    <div>
                     <button className="btnsubmit" type="submit">Crear pokemon</button>
                    </div>
                </div>
            </form>
            
        </DivStyled>
    )
}