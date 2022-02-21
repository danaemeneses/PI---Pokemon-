import React from "react";


export default function Paginado ({pkPorPage, allPokes, paginado}){
    const numPages = []

    for (let i=1; i<= Math.ceil(allPokes/pkPorPage); i++){
        numPages.push(i) // revisar 
        
    }

    return(
        <nav>
            <ul className="paginado">
                {numPages?.map(page =>{
                    return(
                        <li key={page}>
                            <button onClick={()=> paginado(page)}>{page}</button>
                        </li>     
                    )                                
                })}
            </ul>
        </nav>
    )
}