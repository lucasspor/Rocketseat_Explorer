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

  input,textarea,button{
    background-color: transparent;
    border: none;
    outline: none;

    cursor: pointer;
  }

  a, button{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.pink};
  }
    
  &::-webkit-scrollbar {
    width: .8rem;
    max-height: 9.6rem;
  }

  &::-webkit-scrollbar-thumb {
    width: .8rem;
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: .8rem;
  }
`