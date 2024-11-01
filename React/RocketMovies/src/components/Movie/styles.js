import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled(Link)`
  display: grid;
  grid-template-columns: 16rem auto;
  gap: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_300};
  text-align: left;
  
  padding: 3.2rem;
  border-radius: 10px;

  > div{
    h1{
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: .8rem;
    }
    
  > p{
    text-overflow: ellipsis;
    overflow-y: hidden;
    max-height: 10.2rem;

    color: ${({ theme }) => theme.colors.gray};

    font-size: 1.6rem;
  }

  &:hover{
    opacity: 1;
  }

  > footer{
    display: flex;
    margin: 1.5rem 0 1.5rem;
    gap: .8rem;
  }
  }
`