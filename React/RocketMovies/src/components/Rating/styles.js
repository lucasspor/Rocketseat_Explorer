import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: ${({ $isbigsize }) => ($isbigsize ? "1rem" : "0.6rem")};

  svg {
    font-size: ${({ $isbigsize }) => ($isbigsize ? "2rem" : "1.2rem")};
    color: ${({ theme }) => theme.colors.pink};
  }
`