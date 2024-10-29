import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  gap: 16px;

  cursor: pointer;

  padding: 2rem 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.background_400};

  > svg{
    color: ${({ theme }) => theme.colors.gray};
  } 

  > input {
    flex: 1;
    color: ${({ theme }) => theme.colors.white};

    &::placeholder{
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`