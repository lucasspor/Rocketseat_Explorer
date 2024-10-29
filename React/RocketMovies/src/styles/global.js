import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  :root{
    font-size: clamp(62.5%, 1vw + 1%, 40%);
  }

  body, input, button, textarea{
    font-size: 1.6rem;
    font-family: "Roboto Slab", sans-serif;
  }

  body{
   
    background-color: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.background_white};
  }

  input,text-area,button{
    background-color: transparent;
    border: none;
    outline: none;

    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.pink};
  }

  a:hover, button:hover{
    opacity: 0.4;
  }
`