import styled from "styled-components";

export const Button=styled.button`
    text-decoration:none;
    max-width:auto;
    background-color: rgb(255,0,0);
    color: rgb(255,255,255);
    padding: 1.4rem 2.4rem;
    border: none;
    text-transform: uppercase;
    text-align:center;
    cursor:pointer;
    transition: all 0.3s ease;

    &:hover,
    &:active{
        
        transform:scale(0.96);
    }

    a{
        text-decoration:none;
        color:rgb(255,355,255);

    }
`;