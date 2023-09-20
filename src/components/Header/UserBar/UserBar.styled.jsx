import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 32px;
  margin-right: 16px;
  @media screen and (max-width: 767px) {
    ${'' /* margin-right: 48px; */}
    gap: 14px;
  }
`;

export const Avatar = styled(NavLink)`
  width: 37px;
  height: 37px;
  border: 1px solid #e6533c;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const Img = styled.img`
  width: 37px;
  height: 37px;
  object-fit: cover;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const Link = styled(NavLink)`
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
