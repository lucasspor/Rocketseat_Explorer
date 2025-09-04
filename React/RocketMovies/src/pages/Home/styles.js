import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content";

  > main{
    grid-area: content;
  }
`

export const Form = styled.form`
     max-width: 113.7rem;
     width: 100%;
     margin: 3.8rem auto;
     padding: 0 10%;

      > header{
        display: flex;
        justify-content: space-between;
        
        h1  {
          color: ${({ theme }) => theme.colors.white};
          font-weight: normal;
        }
      }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 3.7rem;
  max-height: 45rem; 
  
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .8rem;
    height: 9.6rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: .8rem;
  }

`