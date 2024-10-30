import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_300};
  text-align: left;
  
  padding: 3.2rem;
  border-radius: 10px;

  > h1{
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: .8rem;
  }

  > p{
    text-overflow: ellipsis;
    overflow-y: hidden;
    max-height: 4.5rem;

    color: ${({ theme }) => theme.colors.gray};

    margin: 1.5rem 0  1.5rem;
  }

  &:hover{
    opacity: 1;
  }

  > footer{
    display: flex;
    gap: .8rem;
  }
`
