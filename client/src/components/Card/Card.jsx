import React from "react";
import {DivStyled} from "./Styled"

export default function Card({name, img, types, attack}){ 

    if(typeof types[0] !== "string"){
        types = types.map(t => t.name)
    } else {
        types = types 
    }

    return(
        <DivStyled>
            <div className="card">
                <img src={img} alt="img pokemon" width="200px" height="250px"/>
                
                <div className="desc">
                    <h3>{name.toUpperCase()}</h3>
                    <h5>Attack: {attack}</h5>
                    <h5>Types: {types.join(", ")}</h5>
                </div>
            </div>
        </DivStyled>
    )
}
