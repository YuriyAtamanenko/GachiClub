import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 375px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`;
export const Title = styled.h2`
  @media screen and (min-width: 375px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 116.667%;

    color: var(--primary-text-color);
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137.5%;
    margin-bottom: 32px;
  }
`;
