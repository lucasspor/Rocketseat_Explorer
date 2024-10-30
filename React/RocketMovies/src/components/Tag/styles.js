import styled from "styled-components"

export const Container = styled.span`
  font-size: 1.2rem;

  border-radius: 5px;
  padding: 5px 14px;
  
  background-color: ${({theme}) => theme.colors.background_400};
  color: ${({theme}) => theme.colors.sowhite};
`