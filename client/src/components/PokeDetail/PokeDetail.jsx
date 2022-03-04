import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { detailsPoke } from "../../actions";
import { DivStyled } from "./StyledDetail";


export default function PokeDetail(){
    const dispatch = useDispatch();
    const myPokemon = useSelector((state) => state.details)

    const {id} = useParams() //con este hook me traigo el id

    useEffect(() =>{
        dispatch(detailsPoke(id))
    }, [dispatch])



    console.log(myPokemon)

    return(
        <DivStyled>
            <div className="cont-btn"></div>
            
                    <div className="backbtn">
                    <Link to="/home"><button className="boton">Back to Home</button></Link>
                    </div>
                
            <div className="detail">
                {
                    myPokemon?
                    <div className="poke">
                        <div className="info-details">
                            <h1>I'M {(myPokemon.name)?.toUpperCase()}</h1>
                            <div>

                            
                            <h6>ID: {myPokemon.id}</h6>
                            <img src={myPokemon.img} alt="pokemon img"/>
                            <hr/>
                            <div className="stats">
                                <h4>HP: {myPokemon.hp}</h4>
                                <h4>Attack: {myPokemon.attack}</h4>
                                <h4>Defense: {myPokemon.defense}</h4>
                                <h4>Speed: {myPokemon.speed}</h4>
                                <h4>Weight: {myPokemon.weight}</h4>
                                <h4>Height: {myPokemon.height}</h4>
                            </div>
                            
                            <h4>Types: {myPokemon.types?.map(t => t).join(", ") }</h4>
                        </div>
                        </div>
                    </div> : <p>Pokemon not found :/ </p>
                }
                
            </div>
        </DivStyled>
    )
}