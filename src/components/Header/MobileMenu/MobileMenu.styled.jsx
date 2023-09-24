import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Menu = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  left: auto;
  right: ${({ nav }) => (nav ? '0' : '-100%')};
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: #e6533c;
  z-index: 10;
  transition: right 1s;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const Active = styled.div`
  @media screen and (max-width: 769px) {
    right: ${({ nav }) => (nav ? '0' : '-100%')};
  }
`;

export const MenuBtn = styled.button`
  display: block;
  position: absolute;
  right: 0;
  top: auto;
  cursor: pointer;
  z-index: 11;
  background-color: transparent;
  color: #efede8;
  border: none;
  padding: 10px 0;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
