import styled from "styled-components";



export const Div = styled.div `

    background-image: url("https://wallpapercave.com/wp/FCknYwQ.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    font-family: 'Gluten', cursive;
    height: 100vh;
    .title{
        display:flex;
        text-align:center;
        justify-content: center;
        margin: 0px;
        font-size:30px;
    }
    h1{
        margin-top: 5px;
        font-size: 15vmin;
        line-height: 20vmin;
        border: none;
        color: #FFA07A;
        text-shadow: 6px 3px 6px black ;
    }
    
    .link-landing{
        text-decoration:none
    }

    .cont-btn{
        display:flex;
        justify-content:center;
        margin-top: 110px;
    }

    .btn-landing{
    cursor: pointer;
    width: 150px;
    height: 50px;
    font-size: 150%;
    background-color: #FFA07A;
    color: white;
    font-weight: 700;
    border-radius: 5px;
    position: relative;
    -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 9px rgba(0,0,0,0); 
    box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 9px rgba(0,0,0,0);
    font-family: 'Gluten', cursive;
    }

    img{
        margin-top: 45px;
    }
`