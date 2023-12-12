import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
    }

    html
    {
        font-size: 82.5%;
        overflow-x:hidden;
    }

    h1{
        color: ${({theme})=>theme.colors.heading};
        font-size: 6rem;
        font-weight:900;
    }

    h2{
        color: ${({theme})=>theme.colors.heading};
        font-size: 4.4rem;
        font-weight:300;
        white-space:normal;
        text-align:center;
    }
    h3
    {
        font-size:1.8rem;
        font-weight:400;

    }
    h4
    {
        font-weight:300;

    }
    a{
        text-decoration:none;
    }
    li{
        list-style:none;
    }

    .container
    {
        max-width: 120rem;
        margin: 0 auto;
    }

    .grid{
        display:grid;
        gap: 9rem;
    }

    .grid-two-column{
        grid-tamplate-columns : repeat(2,1fr)
    }

    .grid-three-column{
        grid-tamplate-columns : repeat(3,1fr)
    }
    .grid-four-column{
        grid-tamplate-columns : repeat(2,1fr)
    }
`;