import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  padding: 1.6rem 1rem;
  background-color: ${({ theme, $isactive }) => $isactive ? `${theme.colors.dark}` : `${theme.colors.pink}`};

  border-radius: 10px;
  font-size: 1.6rem;
  color:  ${({ theme, $isactive }) => $isactive ? `${theme.colors.pink}` : `${theme.colors.background_800}`};

  &:disabled{
    opacity: .5;
  }
`