import styled from 'styled-components';
import { Form, Field } from 'formik';

import desktop1x from './../../images/default-desktop-1x.jpg';
import desktop2x from './../../images/default-desktop-2x.jpg';
import tablet1x from './../../images/default-tablet-1x.jpg';
import tablet2x from './../../images/default-tablet-2x.jpg';
import mobile1x from './../../images/default-mobile-1x.jpg';
import mobile2x from './../../images/default-mobile-2x.jpg';

export const Container = styled.div`
  min-width: 320px;
  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  padding: 127px 20px 40px;
  margin: 0 auto;
  width: 100%; /* Занимать всю доступную ширину на экранах меньше 375px */

  @media screen and (min-width: 375px) {
    /* Ширина для экранов от 376px до 767px */
    width: 375px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    width: 768px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    width: 100%; /* Занимать всю доступную ширину */
  }
`;

export const WrapperDesktop = styled.div`
  position: absolute;
  top: 50%;
  right: auto;
  width: 375px;
  height: 100vh;
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
    top: 0;
    right: auto;
    width: 768px;
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

export const WrapperForm = styled.div`
  padding-top: 127px;
  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`;

export const WrapperText = styled.div`
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.05px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0.05px;
    color: #efede8;
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
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.6px;
    color: #efede84d;
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

export const StyledField = styled(Field)`
  margin-bottom: 40px;
  width: 164px;

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    width: 364px;
    height: 196px;
    border-radius: 12px;
  }
`;

export const ButtonSubmit = styled.button`
  padding: 14px 40px 14px 40px;
  border-radius: 12px;
  background: var(--orange, #e6533c);
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: white;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 12px;

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
  }
  &:hover {
    background-color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;
