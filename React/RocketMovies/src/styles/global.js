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

  body{
    background-color: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.background_white};
  }

  input,text-area,button{
    background-color: transparent;
    border: none;
  }
`