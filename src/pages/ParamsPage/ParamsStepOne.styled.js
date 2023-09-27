import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

import params1xmobile from '../../images/params01-mobile-1x.jpg';
import params2xmobile from '../../images/params01-mobile-2x.jpg';

export const Container = styled.div`
  background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
    url(${params1xmobile});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 289px 571px;
  margin-right: -2em;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${params2xmobile});
  }
`;

export const Title = styled.h2`
  margin-top: 90px;
  margin-bottom: 14px;

  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;

export const Text = styled.p`
  margin-bottom: 50px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.3);
`;

export const Label = styled.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const StyledFormik = styled(Form)`
  gap: 7px;
  label {
  }
`;

export const InputField = styled(Field)`
  background-color: transparent;
  width: 155px;
  height: 46px;
  outline: none;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: var(--primary-text-color);

  &[name='height'] {
    margin-right: 14px;
    margin-bottom: 14px;

    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 14px;
  }
  &[name='desiredWeight'] {
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 14px;
  }
  &[name='currentWeight'] {
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 14px;
    width: 159px;
    height: 46px;
  }
  &[name='birthday'] {
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-left: 14px;
    width: 159px;
    height: 46px;
  }
  &:hover {
    border: 1px solid rgba(230, 83, 60, 1);
  }
`;

export const ButtonNext = styled.button`
  margin-bottom: 343px;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(239, 237, 232, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 14px;
`;

export const Next = styled.button`
  fill: rgba(230, 83, 60, 1);
  width: 10px;
  height: 8.33px;
`;
