import styled from "styled-components";


export const DivStyled = styled.div`
    background-image: url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700579201.jpg");
    padding: 10px;
    font-family: 'Kufam', sans-serif;

    .btnback{
        display:flex;
        cursor: pointer;
        padding-top: 5px;
        width: 90px;
        height: 40px;
        font-size: 100%;
        background-color: #FFA07A;
        color: white;
        font-weight: 100%;
        border: 1px solid white;
        border-radius: 5px;
        font-family: 'Gluten', cursive;
}

    form{
        display:flex;
        justify-content:center;
    }
    
    .contform{
        border: 1px solid white;
        border-radius: 15px;
        background-color: #D8BFD8;
        width: 800px;
        box-shadow: 1px 2px 17px 3px white;
    }

    .link{
        text-decoration:none;
    }


    .input-col{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        margin: 2rem;
        @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
            margin: 4rem;
    }
    }

    .alltypes{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        margin: 1rem;
        @media (min-width: 768px) {
            grid-template-columns: repeat(5, 1fr);
            margin: 2rem;
    }
    }
    
    .btnsubmit{ 
        margin-bottom: 15px;
        cursor: pointer;
        padding-top: 5px;
        width: 150px;
        height: 40px;
        font-size: 100%;
        background-color: #FFA07A;
        color: white;
        font-weight: 100%;
        border: 1px solid white;
        border-radius: 5px;
        box-shadow: 2px 2px 17px 3px white;
        font-family: 'Gluten', cursive;
    }
    
`