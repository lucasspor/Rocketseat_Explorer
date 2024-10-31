import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header{
    width:100%;
    height: 14.4rem;

    background-color: ${({theme}) => theme.colors.background_300};
    
    display: flex;
    align-items: center;

    padding: 0 12.4rem;
    
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: -10rem auto 0;

  > div:nth-child(3n){
    margin-bottom:2.4rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;

  margin-bottom: 3.2rem;

  > div {
    display: grid;
    gap: .8rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;
  width: 18.6rem;
  height: 186px;
  
  > img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.colors.pink};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input{
      display: none;
    }

    svg{
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.colors.background_800};
    }
  }
  
`