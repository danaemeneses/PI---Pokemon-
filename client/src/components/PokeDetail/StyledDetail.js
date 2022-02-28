import styled from "styled-components";


export const DivStyled = styled.div`
    background-image: url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700579201.jpg");

    .cont-btn{
        padding-top: 20px;
    }
    
    .detail{
        margin: 0px;
        padding: 20px;
        display:flex;
        justify-content:center;
    }

    .backbtn{
        display:flex;
        justify-content: flex-start;
        padding-left: 30px;
    }

    .boton{
        cursor: pointer;
        width: 130px;
        height: 30px;
        font-size: 100%;
        background-color: #FFA07A;
        color: white;
        font-weight: 100%;
        border: 1px solid white;
        border-radius: 5px;
        font-family: 'Gluten', cursive;
    }

    .poke{
        border: 1px solid white;
        border-radius: 15px;
        background-color: #D8BFD8;
        width: 500px;
        box-shadow: 1px 2px 17px 3px white;
    }
    h1{
        font-family: 'Tourney', cursive;
        font-size:40px;
    }
    img{
        width:250px;
        height:250px;
    }
    .stats{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

`