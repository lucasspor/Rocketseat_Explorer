import styled from "styled-components"

export const Container = styled.div`
  > h2{
    font-size: 2rem;
    color: ${({theme}) => theme.colors.gray};
    margin-bottom: 2.4rem;
  }

  > div{
    display: flex;
    width: 100%;
    gap: 2.4rem;

    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.dark};
    padding: 16px;
  }
  
`