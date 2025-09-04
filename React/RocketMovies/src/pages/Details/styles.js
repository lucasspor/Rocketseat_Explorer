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
  padding: 0 10%;
  margin: 4rem auto;

  > p{
      color: ${({ theme }) => theme.colors.white} ;
      font-size: 1.6rem;
    }
  `
export const Spacer = styled.div`
  margin: 2.4rem 0 4rem;

  
  > section {
    .title {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin-bottom: 1.5rem;
    
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

    margin-bottom:  2rem;

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