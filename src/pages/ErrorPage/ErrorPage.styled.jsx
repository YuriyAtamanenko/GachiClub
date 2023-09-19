import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import desktop1x from './../../images/default-desktop-1x.jpg';
import desktop2x from './../../images/default-desktop-2x.jpg';
import tablet1x from './../../images/default-tablet-1x.jpg';
import tablet2x from './../../images/default-tablet-2x.jpg';
import mobile1x from './../../images/default-mobile-1x.jpg';
import mobile2x from './../../images/default-mobile-2x.jpg';

export const Background = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-image: url(${mobile1x});

  background-repeat: no-repeat;
  background-position: bottom 0 right -30px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobile2x});
    background-size: contain;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    background-image: url(${tablet1x});
    background-size: contain;
    background-position: bottom 0 right 0px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    background-image: url(${desktop1x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktop2x});
    }
  }
`;

export const ErrorContainer = styled.div`
  position: relative;
  width: calc(0.64 * 100%);
  height: 100%;
  padding: 24px 20px;

  display: flex;
  align-items: center;

  background-color: var(--bright-accent-color);

  @media screen and (min-width: 375px) {
    width: 240px;
  }

  @media screen and (min-width: 768px) {
    width: 420px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 670px;
    padding: 32px 96px;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  top: 24px;
  left: 20px;

  @media screen and (min-width: 768px) {
    top: 32px;
    left: 32px;
  }
  @media screen and (min-width: 1440px) {
    top: 32px;
    left: 96px;
  }
`;

export const Logo = styled.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`;

export const ContentBox = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;
export const Title = styled.h1`
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 150px;
    letter-spacing: 1.6px;
  }
`;

export const Text = styled.p`
  margin-top: 14px;
  margin-bottom: 28px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 28px;

    font-size: 16px;
    line-height: 24px;
  }
`;
export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  width: 147px;
  height: 42px;
  border: 1px solid var(--secondary-text-color);
  border-radius: 12px;

  &:hover,
  &:focus {
    background-color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;

    width: 204px;
    height: 56px;
  }
`;
