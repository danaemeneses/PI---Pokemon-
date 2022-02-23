import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { detailsPoke } from "../actions";

export default function PokeDetail(){
    const dispatch = useDispatch();
    const myPokemon = useSelector((state) => state.details)

    const {id} = useParams() //con este hook me traigo el id

    useEffect(() =>{
        dispatch(detailsPoke(id))
    }, [dispatch])



    console.log(myPokemon)

    // if(typeof (myPokemon.types) !== "string"){
    //     myPokemon.types = (myPokemon.types)?.map((t) => t.name)
    // } else {
    //     myPokemon.types = myPokemon.types 
    // }

    // if( (myPokemon.id)?.length >3){
    //     myPokemon.types = myPokemon.types.map((t) => t.name);
    //     console.log(myPokemon.types)
    // } else {
    //     myPokemon.types = myPokemon.types;
    //     console.log(myPokemon.types)

    // }


    return(
        <div>
            {
                myPokemon?
                <div>
                    <h1>{(myPokemon.name)?.toUpperCase()}</h1>
                    <img src={myPokemon.img}/>
                    <h5>ID: {myPokemon.id}</h5>
                    <h3>HP: {myPokemon.hp}</h3>
                    <h3>ATTACK: {myPokemon.attack}</h3>
                    <h3>DEFENSE: {myPokemon.defense}</h3>
                    <h3>SPEED: {myPokemon.speed}</h3>
                    <h3>WEIGHT: {myPokemon.weight}</h3>
                    <h3>HEIGHT:{myPokemon.height}</h3>
                    <h3>TYPES: {myPokemon.types?.map(t => t).join(", ") }</h3>
                </div> : <p>Pokemon not found :/ </p>
            }
            <Link to="/home">
                <button>Back to Home</button>
            </Link>
        </div>
    )
}