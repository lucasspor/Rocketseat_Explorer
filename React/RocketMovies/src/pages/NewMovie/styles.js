import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content"  ;

  > main{
    grid-area: content;
    overflow-y: auto;

    &::-webkit-scrollbar {
    width: .8rem;
    max-height: 9.6rem;
    }

    &::-webkit-scrollbar-thumb {
      width: .8rem;
      background-color: ${({ theme }) => theme.colors.pink};
      border-radius: .8rem;
    }
  }
`

export const Form = styled.form`
  max-width: 113.7rem;
  padding: 0 10rem;
  margin-top: 4rem;

  > button:first-child{
    margin-bottom: 2.4rem;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.sowhite};
  }
`