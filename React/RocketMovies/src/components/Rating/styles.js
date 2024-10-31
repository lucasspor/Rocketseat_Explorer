import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  svg {
    color: ${({ theme }) => theme.colors.pink}; 
    width: ${({ $isbigsize }) => ($isbigsize ? "24px" : "16px")};
    height: ${({ $isbigsize }) => ($isbigsize ? "24px" : "16px")};
  }
`;
