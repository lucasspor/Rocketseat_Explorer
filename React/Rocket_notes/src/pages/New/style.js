import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    overflow-y: auto;
    &::-webkit-scrollbar {
    display: none;
  }
  }
`

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;
  
  > header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a{
      font-size: 20px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`