import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.background_400};

  padding:  2rem 10%;

  gap: 3rem;

  > h1 {
    color: ${({ theme }) => theme.colors.pink};
    font-size: 2.4rem;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-basis: 19.8rem;
  flex-shrink: 1;
  gap: .9rem;

  > div {

    text-align: right;
    h1{
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.white};
       white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 7em;
    }

    a {
      white-space: nowrap;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray};
    }

  }

   > a {
    img {
      width: clamp(4rem, 6vw, 6.4rem);
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.gray}; 
    }

`