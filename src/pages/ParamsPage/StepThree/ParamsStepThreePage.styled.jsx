import styled from '@emotion/styled';
import desktop1x from './../../../images/params03-desktop-1x.jpg';
import desktop2x from './../../../images/params03-desktop-2x.jpg';
import tablet1x from './../../../images/params03-tablet-1x.jpg';
import tablet2x from './../../../images/params03-tablet-2x.jpg';
import mobile1x from './../../../images/params03-mobile-1x.jpg';
import mobile2x from './../../../images/params03-mobile-2x.jpg';

export const Container = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    width: 335px;
    margin-bottom: 40px;
    line-height: 105.26%;
  }

  @media screen and (min-width: 768px) {
    width: 496px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;
    margin-bottom: 64px;
  }
`;

export const Title = styled.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px; /* 137.5% */
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
    margin-bottom: 64px;
  }
`;

export const BtnContainer = styled.div`
  display: inline-flex;
  gap: 16px;
  margin-bottom: 530px;
  @media screen and (min-width: 768px) {
    margin-bottom: 490px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 260px;
  }
`;

export const BtnGo = styled.button`
  display: inline-flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background: #e6533c;
  color: #efede8;

  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.4s;

  @media screen and (min-width: 768px) {
    padding: 16px 75px;
    font-size: 20px;
    line-height: 24px; /* 120% */
  }

  &:hover,
  &:focus {
    background: #ef8964;
  }
`;

export const BtnBack = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  color: rgba(239, 237, 232, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
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
  right: auto;
  width: 375px;
  height: 812px;
  pointer-events: none;
  z-index: -1;

  background-image: url(${mobile1x});
  background-size: 375px 812px;
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
    height: 1024px;
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

export const Svg = styled.svg`
  fill: #e6533c;
  stroke: #e6533c;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
  }
`;

export const StatisticsBox = styled.div`
  position: absolute;
  left: 35%;
  top: 70%;
  @media screen and (min-width: 768px) {
    left: 45%;
    top: 70%;
  }
  @media screen and (min-width: 1440px) {
    left: 53%;
    top: 50%;
  }
`;
