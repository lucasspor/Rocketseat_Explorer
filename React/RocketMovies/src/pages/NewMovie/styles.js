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
  }
`

export const Form = styled.form`
  max-width: 123.5rem;
  padding: 0 4rem;
  margin: 4rem auto;

  display: grid;
  gap: 4rem;

  max-height: 45rem;
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

  > header {
    
    h1 {
      font-size: 3.6rem;
      font-weight: 700;
      
      color: ${({ theme }) => theme.colors.white};
    }
  
  }
  > p{
      color: ${({ theme }) => theme.colors.white} ;
      font-size: 1.6rem;
    }
  `

export const Spacer = styled.div`
  display: flex;
  gap: 4rem;
`