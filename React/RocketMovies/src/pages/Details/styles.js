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

  overflow-y: scroll;
  max-height: 50rem;

  &::-webkit-scrollbar {
    width: .8rem;
    max-height: 9.6rem;
  }

  &::-webkit-scrollbar-thumb {
    width: .8rem;
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: .8rem;
  }

  > p{
      color: ${({ theme }) => theme.colors.white} ;
      font-size: 1.6rem;
    }
  `
export const Spacer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 16rem auto;
  grid-template-rows: 1fr;
  grid-template-areas: "content";
  gap: 2.4rem;


  margin: 2.4rem 0 4rem;

  
  > section {
     .title {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin-bottom: 2.4rem;
    
    h1 {
      font-size: 3.6rem;
      font-weight: 700;
      
      color: ${({ theme }) => theme.colors.white} ;
    }
  }
      
   .tags{
    display: flex;
    gap: .8rem;
  }
  }
`


export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  > div {
    display: flex;
    align-items: center;
    gap: .8rem;

    margin-bottom:  4rem;

    img, svg {
      width: 16px;
      height: 16px; 
    }

    img, svg {
     border-radius: 50%;
    }

    svg{
      color: ${({ theme }) => theme.colors.pink};
    }

    p{
      color: ${({ theme }) => theme.colors.white} ;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow-x: hidden;
      max-width: 17rem;
    }
    
  }
` 