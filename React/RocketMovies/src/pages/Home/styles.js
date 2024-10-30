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
     max-width: 113.7;
     margin: 3.8rem auto;
     padding: 0 10rem;

      > header{
        display: flex;
        justify-content: space-between;
        
        h1  {
          color: ${({ theme }) => theme.colors.white};
          font-weight: normal;
        }

        button{
          width: 20.7rem;
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

  max-height: calc(100vh - 29.7rem);
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

`