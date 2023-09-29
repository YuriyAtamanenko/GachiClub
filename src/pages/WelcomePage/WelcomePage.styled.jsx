import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import desktop1x from './../../images/default-desktop-1x.jpg';
import desktop2x from './../../images/default-desktop-2x.jpg';
import tablet1x from './../../images/default-tablet-1x.jpg';
import tablet2x from './../../images/default-tablet-2x.jpg';
import mobile1x from './../../images/default-mobile-1x.jpg';
import mobile2x from './../../images/default-mobile-2x.jpg';

export const LinkList = styled.ul`
  display: flex;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 90px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 150px;
  }
`;

export const WrapperDesktop = styled.div`
  position: absolute;
  top: 50%;
  right: auto;
  width: 375px;
  height: 100vh;
  pointer-events: none;
  z-index: -1;

  background-image: url(${mobile1x});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${mobile2x});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: auto;
    width: 768px;
    pointer-events: none;

    background-image: url(${tablet1x});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${tablet2x});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${desktop1x});
    background-size: 670px 800px;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${desktop2x});
      }
    }
  }
`;

export const SignUp = styled(NavLink)`
  color: #efede8;
  text-decoration: none;
  border-radius: 12px;
  background: #e6533c;
  padding: 12px 40px;
  transition: all 0.4s;

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }

  &:hover,
  &:focus {
    background: #ef8964;
  }
`;

export const SignIn = styled(NavLink)`
  color: #efede8;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 12px 40px;
  transition: all 0.4s;
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }

  &:hover,
  &:focus {
    border: 1px solid #e6533c;
  }
`;
