import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;

        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            border-radius:1rem;
            background-color: darkgray;
        }
    }
    
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight:lighter;
        color: #333;
    }
    h3{
        font-size: 1.1rem;
        color: #333;
        padding:1.5rem 0;
    }
    p{
        font-size: 1rem;
        line-height: 200%;
        color: #696969;
    }
    
    a {
      text-decoration: none;
      color: #333;
    }
    
    ul {
      list-style: none;
    }

`;

export default GlobalStyle;
