import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  color: ${({theme, $isactive}) => $isactive ? `${theme.colors.pink}` : `${theme.colors.gray}`};
`