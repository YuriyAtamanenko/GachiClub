import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import desktop1x from './../../images/default-desktop-1x.jpg';
import desktop2x from './../../images/default-desktop-2x.jpg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const BlackSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 127px 20px 483px 0;
  color: white;
  @media screen and (min-width: 768px) {
    padding: 189px 138px 481px 0;
  }

  @media screen and (min-width: 1440px) {
    background-color: #040404;
    padding: 200px 76px 246px 0;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  @media screen and (min-width: 1440px) {
    width: 100%;
    ${'' /* background-position:center; */}
    ${'' /* background-size:670px 1005px; */}
    background:
      linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      url(${desktop1x}),
      lightgray 50% / cover no-repeat;
    ${'' /* @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background:
        linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
        url(${desktop2x}),
        lightgray 50% / cover no-repeat;
    } */}
  }
`;

export const Title = styled.h1`
  color: #efede8;
  font-size: 38px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.38px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    max-width: 598px;
    font-size: 70px;
    font-weight: 500;
    line-height: 78px;
    letter-spacing: 0.7px;
  }

  @media screen and (min-width: 1440px) {
    width: 598px;
  }
`;

export const WelcomeBtn = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
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
