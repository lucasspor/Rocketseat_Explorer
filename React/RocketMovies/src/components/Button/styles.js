import styled from "styled-components"

export const Container = styled.button`
  width: 100%;

  padding: 1.6rem 1rem;
  background-color: ${({ theme }) => theme.colors.pink};

  border-radius: 10px;
  font-size: 1.6rem;
  color: ${({theme}) => theme.colors.background_400};
`