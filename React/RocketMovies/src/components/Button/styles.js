import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  padding: 1.6rem 1rem;
  background-color: ${({ theme }) => theme.colors.pink};

  border-radius: 10px;
  font-size: 1.6rem;
  color: ${({theme}) => theme.colors.background_400};

  &:disabled{
    opacity: .5;
  }
`