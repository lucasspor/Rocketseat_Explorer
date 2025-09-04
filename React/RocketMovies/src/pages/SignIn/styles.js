import styled from 'styled-components'
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: stretch;
`
export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.pink};
    font-weight: bold;
  }

  > p {
    color: ${({ theme }) => theme.colors.sowhite};
  }

  > h2 {
    margin: 4.8rem  0;
    margin-left: .5rem;
    color: ${({ theme }) => theme.colors.white};
  }

  > .form-content {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  
  
  .input-content{
    display: grid;
    gap: .8rem;
  }

  > a {
    margin-top: 4.2rem;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;