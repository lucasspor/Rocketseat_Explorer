import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 18rem;
  
  background-color: ${({ theme, $isnew }) => $isnew ? `transparent` : theme.colors.background_600};
  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.colors.gray}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete{
    color: ${({ theme, $isnew }) => $isnew ? theme.colors.pink : theme.colors.red};
  }

  .button-add{
     color: ${({ theme }) => theme.colors.pink};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;
    color: ${({ theme }) => theme.colors.white};
    background: transparent;

    border: none;
    
    &::placeholder{
       color: ${({ theme }) => theme.colors.white};
    }
  }
`