import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'


export const Container =  styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1{
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.ORANGE};
    font-weight: bold;
  }
  > h2 {
    font-size: 24px;
    color:${({theme}) => theme.COLORS.WHITE};
    margin: 84px 0 24px;
  }
  
  > p {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 14px;
  }

  > button:nth-child(2n){
    margin-top: 64px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover; 
`