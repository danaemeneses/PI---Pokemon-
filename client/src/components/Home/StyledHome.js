import styled from "styled-components";

export const DivStyled = styled.div`
    background-color: #FFDAB9;

    h1{
        font-family: 'Tourney', cursive;
        font-size: 60px;
    }

    .btn-home{
        margin-right: 30px;
        margin-bottom: 30px;
        cursor: pointer;
        width: 130px;
        height: 40px;
        font-size: 100%;
        background-color: #FFA07A;
        color: white;
        font-weight: 100%;
        box-shadow: 1px 1px 9px 1px white;
        border-radius: 10px;
        font-family: 'Gluten', cursive;

    }

    .filtrados{
        background-color: #DDA0DD;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .opc-filt{
        margin-right: 20px;
        height: 25px;
        border-radius: 10px;
        font-family: 'Kufam', sans-serif;
    }

    .all-cards{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        margin: 2rem;
        @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
            margin: 4rem;
    }

    .link-cards{
        text-decoration: none;
    }
    
 


`