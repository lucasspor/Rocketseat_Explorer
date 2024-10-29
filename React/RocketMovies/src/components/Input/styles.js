import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 2rem 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.background_400};

  > svg{
    color: ${({ theme }) => theme.colors.white};
  } 

  > input {
    flex: 1;
  }
`