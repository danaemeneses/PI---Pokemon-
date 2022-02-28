import React from "react";
import { DivStyled } from "./StyledPaginado";



export default function Paginado ({pkPorPage, allPokes, paginado}){
    const numPages = []

    for (let i=1; i<= Math.ceil(allPokes/pkPorPage); i++){
        numPages.push(i) // revisar 
        
    }

    return(
        <DivStyled>
            <div className="cont-pag">
                <ul className="paginado">
                    {numPages?.map(page =>{
                        return(
                            <ul key={page}>
                                <button className="btn-pag" onClick={()=> paginado(page)}>{page}</button>
                            </ul>     
                        )                                
                    })}
                </ul>
            </div>
        </DivStyled>
    )
}