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
  max-width: 113.7rem;
  margin: 4rem auto 0;

  overflow-y: scroll;
  max-height: 45rem;

  &::-webkit-scrollbar {
  width: .8rem;
  }

  &::-webkit-scrollbar-thumb {
    width: .8rem;
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: .8rem;
  }

  > button:first-child{
    margin-bottom: 2.4rem;
  }
  
  
  > .title {
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
      
  > .tags{
    display: flex;
    gap: .8rem;
    margin-bottom: 4rem;
  }

  > p{
      color: ${({ theme }) => theme.colors.white} ;
      font-size: 1.6rem;
    }
  `

export const Author = styled`
  display: flex;
  gap: .8rem;

  > div {
    display: flex;
    gap: .8rem;

    img, svg {
      width: 16px;
      height: 16px; 
    }

    p{
      color: ${({ theme }) => theme.colors.gray} ;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow-x: hidden;
      max-width: 17rem;
    }
    
  }
` 