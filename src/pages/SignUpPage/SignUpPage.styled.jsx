import styled from 'styled-components';

import desktop1x from './../../images/default-desktop-1x.jpg';
import desktop2x from './../../images/default-desktop-2x.jpg';
import tablet1x from './../../images/default-tablet-1x.jpg';
import tablet2x from './../../images/default-tablet-2x.jpg';
import mobile1x from './../../images/default-mobile-1x.jpg';
import mobile2x from './../../images/default-mobile-2x.jpg';

export const Container = styled.div`
  height: 812px;
  width: 375px;
  &::-webkit-scrollbar {
    display: none;
  }

  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    min-width: 768px; /* Адаптивная ширина */
    min-height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    min-height: 800px;
    width: 100%;
    /* Занимать всю доступную ширину */
  }
`;

export const WrapperDesktop = styled.div`
  position: absolute;
  right: -50px;
  top: 29%;
  width: 375px;
  height: 626px;

  pointer-events: none;
  z-index: -1;

  background-image: linear-gradient(
      168.14deg,
      #040404 14.75%,

      rgba(4, 4, 4, 0) 52.97%
    ),
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${mobile1x});

  background-size: 670px 800px;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: linear-gradient(
          168.14deg,
          #040404 14.75%,
          rgba(4, 4, 4, 0) 52.97%
        ),
        linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${mobile2x});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    height: 1005px;
    width: 670px;
    left: 13%;
    top: 105px;

    background-position: 100% 100%;
    pointer-events: none;

    background-image: url(${tablet1x});

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
    margin-top: 0;
    top: -108px;
    right: 0;
    left: 675px;
    width: 670px;
    height: 1005px;

    background-size: 670px 800px;

    background-image: url(${desktop1x});
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

export const WrapperForm = styled.div`
  padding-top: 90px;
  @media screen and (min-width: 768px) {
    /* padding-top: 140px; */
  }
  @media screen and (min-width: 1440px) {
    padding-top: 150px;
  }
`;

export const WrapperPassword = styled.div`
  position: relative;
  width: 100%;
`;

export const WrapperMessange = styled.div`
  position: relative;
`;

export const WrapperText = styled.div`
  width: 335px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: 0.05px;
  /* color: #efede8; */
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;

    line-height: 137.5%;
    letter-spacing: 0.05px;
  }
`;

export const Text = styled.p`
  margin-bottom: 28px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: 0.77px;
  /* color: #efede84d; */
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.6px;
  }
`;
export const StatisticsWrapper = styled.div`
  position: absolute;
  left: 37%;
  top: 70%;
  @media screen and (min-width: 768px) {
    left: 40%;
    top: 70%;
  }
  @media screen and (min-width: 1440px) {
    left: 45%;
    top: 50%;
  }
`;
