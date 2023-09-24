import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoIcon = styled(NavLink)`
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 126px;
  height: 13px;
  @media screen and (min-width: 768px) {
    width: 151px;
    height: 17px;
  }
`;
