import styled from "styled-components";



export const DivStyled = styled.div`
    
    display: flex;
    justify-content: right;
    padding-top: 10px;
    padding-right:10px;

    .btn-search{
        cursor: pointer;
        width: 80px;
        height: 30px;
        font-size: 100%;
        background-color: #FFA07A;
        color: white;
        font-weight: 100%;
        font-family: 'Gluten', cursive;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border-left: none;
        border: none;
    }

    .input-search{
        width: 150px;
        height: 25px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        border-right:none;
        border: none;
        border-bottom: 2px solid white;
    }
`