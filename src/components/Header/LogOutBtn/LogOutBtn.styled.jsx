import styled from '@emotion/styled';

export const Button = styled.button`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    padding: 0;
    gap: 8px;
    color: #efede8;
    background-color: transparent;
    border: none;
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
