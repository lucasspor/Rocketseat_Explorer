import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content";
  
  > main {
     overflow-y: auto;

     &:-webkit-overflow-scrolling{
      display: none;
     }
  }
`