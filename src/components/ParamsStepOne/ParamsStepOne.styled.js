import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

import params1xmobile from '../../images/params01-mobile-1x.jpg';
import params2xmobile from '../../images/params01-mobile-2x.jpg';
import params1xtablet from '../../images/params01-tablet-1x.jpg';
import params2xtablet from '../../images/params01-tablet-2x.jpg';
import params1xdesktop from '../../images/params01-desktop-1x.jpg';
import params2xdesktop from '../../images/params01-desktop-2x.jpg';

export const Title = styled.h2`
  margin-top: 90px;
  margin-bottom: 14px;

  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 16px;
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 151px;
    margin-bottom: 16px;
    line-height: 44px;
    width: 496px;
  }
`;

export const Text = styled.p`
  margin-bottom: 50px;
  width: 335px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 24px;
    width: 496px;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    width: 527px;
  }
`;


export const StyledFormik = styled(Form)`
  gap: 7px;
  display: inline;
`;

export const InputField = styled(Field)`
  background-color: transparent;
  width: 155px;
  height: 46px;

  outline: none;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: rgba(239, 237, 232, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;


  &[name='currentWeight'] {
    width: 159px;
    height: 46px;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(230, 83, 60, 1);
  }

  transition: 0.5s;

  @media screen and (min-width: 768px) {
    width: 153px;
    height: 52px;
    font-size: 16px;
    line-height: 24px;
    &[name='currentWeight'] {
      width: 172px;
      height: 52px;
    }
    &[name='desiredWeight'] {
      width: 174px;
      height: 52px;
    }
  }
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

export const Message = styled(ErrorMessage)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 36%;
  @media screen and (min-width: 1440px) {
    top: 48%;
  }
`;

export const MessageWeight = styled(ErrorMessage)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 36%;
  left: 190px;
  @media screen and (min-width: 1440px) {
    top: 48%;
    left: 270px;
  }
`;

export const MessageDesired = styled(ErrorMessage)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 42%;
  @media screen and (min-width: 1440px) {
    top: 56%;
  }
`;

export const MessageBirthday = styled(ErrorMessage)`
  position: absolute;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  left: 220px;
  top: 42%;
  @media screen and (min-width: 1440px) {
    top: 56%;
    left: 290px;
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

export const MessageStyleError = styled.div`
  display: flex;
  gap: 4px;
  /* position: absolute; */
  width: 153px;
  margin-top: 5px;
  color: rgba(216, 0, 39, 1);
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  top: 42%;

  @media screen and (min-width: 1440px) {
    top: 56%;
  }
`;

export const MessageStyleSuccess = styled.div`
  /* position: absolute; */
  width: 153px;

  display: flex;
  gap: 4px;

  margin-top: 5px;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;

  color: #3cbf61;
`;
