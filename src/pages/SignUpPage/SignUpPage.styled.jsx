import styled from 'styled-components';

import desktop1x from './../../images/default-desktop-1x.jpg';
import desktop2x from './../../images/default-desktop-2x.jpg';
import tablet1x from './../../images/default-tablet-1x.jpg';
import tablet2x from './../../images/default-tablet-2x.jpg';
import mobile1x from './../../images/default-mobile-1x.jpg';
import mobile2x from './../../images/default-mobile-2x.jpg';

export const Container = styled.div`
  overflow-x: hidden;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }

  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    min-width: 704px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    width: 100%; /* Занимать всю доступную ширину */
  }
`;

export const WrapperDesktop = styled.div`
  position: absolute;
  right: -26px;
  top: 43%;
  width: 375px;
  height: 812px;

  pointer-events: none;
  z-index: -1;

  background-image: url(${mobile1x});
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
    height: 900px;
    width: 700px;
    left: 12%;
    top: 96px;

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
    top: 0;
    right: 0;
    left: 804px;
    width: 670px;
    height: 800px;

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
    padding-top: 140px;
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
  line-height: 28px;
  letter-spacing: 0.05px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;

    line-height: 44px;
    letter-spacing: 0.05px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.77px;
  color: #efede84d;

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 24px;
    letter-spacing: 0.6px;
  }
`;
export const StatisticsBox = styled.div`
  position: absolute;
  left: 34%;
  top: 109%;
  @media screen and (min-width: 768px) {
    left: 45%;
    top: 106%;
  }
  @media screen and (min-width: 1440px) {
    left: 56%;
    top: 50%;
  }
`;
