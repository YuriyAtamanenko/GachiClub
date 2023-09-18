import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Background = styled.div`
  outline: 1px solid white;
  width: 100%;
  margin: 0 auto;

  background-image: url(/src/images/default-mobile-1x.jpg);

  background-repeat: no-repeat;
  background-position: bottom 0 right -30px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const ErrorContainer = styled.div` 
width: 240px;
height: 100vh;
  padding: 24px 20px;


  background-color: var(--bright-accent-color);

  @media screen and (min-width: 375px) {
    width: 240px;
  }

  @media screen and (min-width: 768px) {
    width: 420px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 670px;`;

export const StyledLink = styled(Link)``;

export const Logo = styled.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`;
export const Title = styled.h1`
  margin-top: 213px;

  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
`;
export const Text = styled.p`
  margin-top: 14px;
  margin-bottom: 28px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
`;
export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;

  width: 147px;
  height: 42px;
  border: 1px solid var(--secondary-text-color);
  border-radius: 12px;
`;
