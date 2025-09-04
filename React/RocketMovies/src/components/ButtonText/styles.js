import styled from "styled-components"

export const Container = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  color: ${({theme, $isactive}) => $isactive ? `${theme.colors.pink}` : `${theme.colors.gray}`};

  width: auto;
  padding: 0;
`