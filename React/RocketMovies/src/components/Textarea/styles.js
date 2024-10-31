import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  resize: none;
  cursor: pointer;

  padding: 2rem 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.background_400};

  color: ${({ theme }) => theme.colors.white};

  &:placeholder{
    color: ${({ theme }) => theme.colors.gray};
  }
`