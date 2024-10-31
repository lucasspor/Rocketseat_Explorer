import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  border-radius: 10px;
  padding: 1.6rem;

  background-color: ${({ theme, $isnew }) => $isnew ? `transparent` : theme.colors.background_600};
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.colors.background_600}` : "none"};
  
  > p{
    font-size: 1.6rem;
    color: ${({ theme, $isnew }) => $isnew ? theme.colors.background_900 : theme.colors.white};
    line-height: 1;
  }
  
  > svg {
    color: ${({ theme }) => theme.colors.pink};
    width: 1.6rem;
    flex-shrink: 0;
  }
`;
