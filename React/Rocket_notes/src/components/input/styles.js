import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  display: flex;
  align-items: center;

  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  margin-bottom: 10px;

  
  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin:16px; 
  }

  > input {
    height: 56px;
    width: 100%;

    background: none;
    border: none;
    padding:12px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
` 