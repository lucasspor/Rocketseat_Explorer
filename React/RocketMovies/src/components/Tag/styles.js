import styled from "styled-components"

export const Container = styled.span`
  font-size: 1.2rem;

  border-radius: .8rem;
  padding: .8rem 1.6rem;
  
  background-color: ${({theme}) => theme.colors.background_400};
  color: ${({theme}) => theme.colors.sowhite};
`