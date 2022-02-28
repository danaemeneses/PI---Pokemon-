import React from "react";
import {Link} from "react-router-dom";
import img from "../../images/charmander-cute.gif"
import {Div} from "./styledLanding"

export default function LandingPage(){
    return(
        <Div>
            <div className="title">
                <h1 className="text-title">Welcome to Poke City</h1>
            </div>
                <div className="cont-btn">
                <Link className="link-landing" to="/home">
                    <button className="btn-landing">LETS GO!</button>
                </Link>
                </div>
                <img src={img} alt="snorlax sleeping"/>            
        </Div>
    )
}
