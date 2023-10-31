import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import desktop1x from './../../images/default-desktop-1x.jpg';
import desktop2x from './../../images/default-desktop-2x.jpg';
import tablet1x from './../../images/default-tablet-1x.jpg';
import tablet2x from './../../images/default-tablet-2x.jpg';
import mobile1x from './../../images/default-mobile-1x.jpg';
import mobile2x from './../../images/default-mobile-2x.jpg';

export const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;

  min-width: 320px;
  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  margin: 0 auto;
  width: 100%; /* Занимать всю доступную ширину на экранах меньше 375px */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 375px) {
    /* Ширина для экранов от 376px до 767px */
    width: 375px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    margin: 0;
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

    height: 900px;
    width: 700px;
    left: 12%;
    top: 154px;

    pointer-events: none;
    background-position: 100% 100%;
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
    top: -20px;
    right: 0;
    left: 804px;
    width: 670px;
    height: 820px;
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

export const WrapperForm = styled.div`
  padding-top: 90px;

  @media screen and (min-width: 768px) {
    width: 496px;
    padding-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 150px;
  }
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

export const Text = styled.p`
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

export const StyledForm = styled(Form)`
  width: 364px;
  height: 196px;

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 196px;
  }
`;

// ==================================
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
// =================================

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 64px;
  }
`;

export const FieldStyle = styled(Field)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 335px;
  height: 46px;
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

  &:default-input {
    /* Добавьте стили для фокуса, например, оранжевый ховер */
    border-color: orange;
  }

  /* Добавьте стили для ховера при успешном вводе (зеленый) */
  &.success-input {
    border-color: green;
  }

  /* Добавьте стили для ховера при ошибке (красный) */
  &.error-hover {
    border-color: #d80027;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 52px;

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

export const MessageStyleError = styled.div`
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

  color: #d80027;
`;

export const MessageStyleSuccess = styled.div`
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

export const PasswordField = styled(Field)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 46px;
  padding: 14px;
  border-radius: 12px;
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding-right: 30px;

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
    height: 52px;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const WrapperPassword = styled.div`
  position: relative;
  width: 100%;
`;

export const WrapperMessange = styled.div`
  position: relative;
`;
export const StatisticsBox = styled.div`
  position: absolute;
  left: 34%;
  top: 109%;
  @media screen and (min-width: 768px) {
    left: 48%;
    top: 116%;
  }
  @media screen and (min-width: 1440px) {
    left: 56%;
    top: 50%;
  }
`;
