import styled from '@emotion/styled';

export const Button = styled.button`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 8px;
    color: #efede8;
    background-color: transparent;
    border: none;
  }
  ${
    '' /* position: relative;
  @media screen and (max-width: 767px) {
    background: #e6533c;
    border: 1px solid transparent;
  }
  &:hover {
    filter: blur(0.02em);
    animation: lightBox 1s ease-in-out forwards;
  } */
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
