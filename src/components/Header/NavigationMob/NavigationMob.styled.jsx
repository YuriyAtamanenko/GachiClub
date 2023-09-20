import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  padding: 245px 57px 21px;
  ${
    '' /* display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
  } */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 auto;
  gap: 16px;
  width: 122px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 27px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  color: #efede8;
  transition: all 0.4s;

  &.active {
    border: 1px solid #efede8;
  }
`;

export const Button = styled.button`
  display: flex;
  ${'' /* justify-content: flex-start; */}
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 8px;
  color: #efede8;
  background-color: transparent;
  border: none;
  fill: #efede8;
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  fill: #efede8;
`;
