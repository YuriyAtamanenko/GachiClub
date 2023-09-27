import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import desktop1x from './../../images/default-desktop-1x.jpg';
import desktop2x from './../../images/default-desktop-2x.jpg';
import tablet1x from './../../images/default-tablet-1x.jpg';
import tablet2x from './../../images/default-tablet-2x.jpg';
import mobile1x from './../../images/default-mobile-1x.jpg';
import mobile2x from './../../images/default-mobile-2x.jpg';

export const WrapperDesktop = styled.div`
  position: absolute;
  top: 241px;
  right: -148px;
  width: 375px;
  height: 812px;
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
    top: 131px;
    right: -233px;
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

export const MainBlock = styled.div`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`;

export const TitleSignIn = styled.h2`
  margin-bottom: 14px;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 116.667%;

  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;

    font-size: 32px;
    line-height: 137.5%;
  }
`;

export const TextWelcome = styled.p`
  margin-bottom: 28px;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 16px;
    line-height: 150%;
  }
`;

export const FormikStyle = styled(Formik)``;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;

    margin-bottom: 64px;
  }
`;

export const FieldStyle = styled(Field)`
  display: flex;
  align-items: center;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.6);

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 364px;

    font-size: 16px;
    line-height: 150%;
  }
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;

  color: #d80027;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  padding: 12px 40px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: var(--bright-accent-color);
  border: none;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 112.5%;

  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    display: inline-flex;
    padding: 16px 60px;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    line-height: 120%;
  }
`;

export const ReLink = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.6);
`;

export const LinkStyle = styled(Link)`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration-line: underline;

  color: var(--primary-text-color);
`;
