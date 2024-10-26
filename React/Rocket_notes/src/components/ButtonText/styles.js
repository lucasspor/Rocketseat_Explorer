import styled from 'styled-components'

export const Container = styled.button`
  font-size: 16px;
  color: ${({theme, $isactive}) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100 };
`