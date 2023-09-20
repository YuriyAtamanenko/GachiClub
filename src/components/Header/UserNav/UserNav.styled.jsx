import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: none;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
  ${
    '' /* @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
  }
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

  &:hover,
  &:focus {
    border: 1px solid #e6533c;
  }

  &.active {
    background: #e6533c;
  }
  ${
    '' /* 
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
      padding: 10px 20px;
      border-radius: 12px;
      border: 1px solid #efede8;
    }
  } */
  }
`;
