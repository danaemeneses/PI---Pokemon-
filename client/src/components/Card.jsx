import React from "react";

export default function Card({name, img, types, attack, id}){ 

    if(typeof types[0] !== "string"){
        types = types.map(t => t.name)
    } else {
        types = types 
    }

    return(
        <div>
            <img src={img} alt="img pokemon" width="200px" height="250px"/>
            <h3>{name}</h3>
            <h6>{id}</h6>
            <h5>{attack}</h5>
            <h5>Tipos: {types.join(", ")}</h5>
        </div>
    )
}
