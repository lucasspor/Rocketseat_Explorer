import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 80px;

`

export const Profile = styled(Link)`
 display: flex;
 align-items: center;

 gap: 16px;

 > img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
 }

 > div{
  display: flex;
  flex-direction: column;
  line-height: 24px;

  span{
    font-size: 14px;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }
  strong{
    font-size: 14px;
    color: ${({theme})=> theme.COLORS.WHITE};
  }
 }
`
export const Logout = styled.button`
  border:0;
  background: none;

  > svg{
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`