import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.background_300};
  text-align: left;
  
  padding: 3.2rem;
  border-radius: 10px;

  > h1{
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: .8rem;
  }
  
  > p{
    max-height: 4rem;
    text-overflow: ellipsis;
    overflow-y: hidden;

    color: ${({ theme }) => theme.colors.gray};

    font-size: 1.6rem;
    margin: 1.5rem 0 1.5rem;
  }

  &:hover{
    opacity: 1;
  }

  > div{
    display: flex;
    gap: .8rem;
  }

`