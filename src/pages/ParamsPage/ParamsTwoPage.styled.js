import styled from 'styled-components';

import params1xmobile from '../../images/params02-mobile-1x.jpg';
import params2xmobile from '../../images/params02-mobile-2x.jpg';
import params1xtablet from '../../images/params02-tablet-1x.jpg';
import params2xtablet from '../../images/params02-tablet-2x.jpg';
import params1xdesktop from '../../images/params02-desktop-1x.jpg';
import params2xdesktop from '../../images/params02-desktop-2x.jpg';
import { setLocale } from 'yup';

export const Title = styled.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.38px;
  margin-top: 90px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.11;
    letter-spacing: 0.7px;
    margin-top: 140px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 151px;
  }
`;
export const WrapperDesktop = styled.div`
  position: absolute;
  top: 130px;
  bottom: -20px;
  right: auto;
  width: 370px;
  height: 780px;
  pointer-events: none;
  z-index: -1;

  background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
    url(${params1xmobile});
  background-size: 289px 571px;
  background-position: 100% 100%;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: linear-gradient(
          89deg,
          #040404 0%,
          rgba(4, 4, 4, 0) 100%
        ),
        url(${params2xmobile});
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 260px;
    left: 412px;
    background-position: 100% 100%;
    background-size: 500px 835px;
    pointer-events: none;

    background-image: linear-gradient(
        168.13deg,
        #040404 12.66%,
        rgba(4, 4, 4, 0) 20.98%
      ),
      linear-gradient(90.82deg, #040404 -10.38%, rgba(4, 4, 4, 0) 42.83%),
      linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${params1xtablet});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: linear-gradient(
            89deg,
            #040404 0%,
            rgba(4, 4, 4, 0) 100%
          ),
          url(${params2xtablet});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    top: 0;
    left: 800px;
    width: 670px;
    height: 860px;
    pointer-events: none;

    background-image: linear-gradient(
        88.74deg,
        #040404 1.1%,
        rgba(4, 4, 4, 0) 70.79%
      ),
      url(${params1xdesktop});
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: linear-gradient(
            88.74deg,
            #040404 1.1%,
            rgba(4, 4, 4, 0) 70.79%
          ),
          url(${params2xdesktop});
      }
    }
  }
`;
export const Container = styled.div`
  padding: 20px;
`;
export const ContainerBlood = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 64px;
  margin-bottom: 28px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  text-align: left;
`;
export const ContainerSex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
export const ContainerFirst = styled.div`
  display: flex;
`;
export const Title2 = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 14px;
`;
export const ContainerInfo = styled.div`
  width: 334px;
  height: 196px;
  gap: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
export const ButtonNext = styled.button`
  margin-top: 28px;
  margin-bottom: 343px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(239, 237, 232, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 439px;
    margin-top: 32px;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 204px;
  }
`;
export const Next = styled.svg`
  color: rgba(230, 83, 60, 1);
  width: 10px;
  height: 9px;
`;
export const ContainerInside = styled.div`
  position: relative;
  top: -200px;
  right: 6px;
  @media screen and (min-width: 768px) {
    top: -256px;
  }
  @media screen and (min-width: 1440px) {
    top: -380px;
    right: -30px;
  }
`;
export const Back = styled.svg`
  fill: rgba(230, 83, 60, 1);
  width: 10px;
  height: 9px;
`;
