import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  ${'' /* max-width: 1440px; */}
  ${'' /* text-align:center */}
  margin: 0 auto;
  ${
    '' /* @media screen and (max-width: 767px) {
    
  }

  @media screen and (min-width: 768px) {
   
    min-width: 768px
  }
  

  @media screen and (min-width: 1440px) {
  
    max-width: 1440px;
  } */
  }
`;

export const BlackSection = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 127px 20px 483px;
  @media screen and (min-width: 768px) {
    padding: 189px 138px 481px 32px;
  }

  @media screen and (min-width: 1440px) {
    flex: 1;
    background-color: #040404;
    padding: 200px 76px 246px 96px;
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
`;

export const SignUp = styled(NavLink)`
  color: #efede8;
  text-decoration: none;
  border-radius: 12px;
  background: var(--orange, #e6533c);
  padding: 12px 40px;
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }

  ${
    '' /* &:hover {
   filter: blur(0.02em);
     animation: lightBox 1s ease-in-out forwards;
  } */
  }
`;

export const SignIn = styled(NavLink)`
  color: #efede8;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 12px 40px;
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
  }

  ${
    '' /* &:hover {
   filter: blur(0.02em);
     animation: lightBox 1s ease-in-out forwards;
  } */
  }
`;

export const ImageSection = styled.div`
  @media screen and (min-width: 1440px) {
    flex: 1;
    background:
      linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      url(https://img.freepik.com/free-photo/side-view-people-training-gym_23-2150340891.jpg?w=826&t=st=1695136430~exp=1695137030~hmac=ad9d760ee7674f82e7d5a8622188c1bd3b2f4bf68b25f7a3bcd64dab8c610182),
      lightgray 50%;
    ${
      '' /* background-image:
      linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      url('../../images/default-desktop-1x.jpg'),
      lightgray 50%;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image:
        linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
        url('../../images/default-desktop-2x.jpg'),
        lightgray 50%;
    } */
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }
`;
