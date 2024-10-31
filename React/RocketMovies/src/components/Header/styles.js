import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  grid-area: header;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.background_400};

  padding: 3rem 10rem;

  gap: 6.4rem;

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
      overflow-x: hidden;
      max-width: 20rem;
    }

    a {
      white-space: nowrap;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray};
    }

  }

  > a {
    img{
    width: 6.4rem;
    border-radius: 50%;
    border-radius: 1px solid ${({ theme }) => theme.colors.gray};
  }
  }

`