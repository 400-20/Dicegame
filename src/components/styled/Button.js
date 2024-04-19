import styled from 'styled-components'

 export const Button = styled.button`
background-color: black;
color: white;
padding: 10px 18px;
border-radius: 5px;
min-width: 220px;
border: none;
    font-size: 16px;
    transition: 0.3s ease-in-out;
    border: 1px solid transparent;
    cursor: pointer;



    &:hover{
        background-color: #ffffff;
        border: 1px solid black;
        color: black;
        font-weight: 600;
        
    }
`

export const OutlineButton = styled(Button)` 
background-color :white ;
color: black;
border: 1px solid black;
   &:hover{
        background-color: #000;
        border: 1px solid transparent;
        color: white;
        font-weight: 600;
        
    }`;
