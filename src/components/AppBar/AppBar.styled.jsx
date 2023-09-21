import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoIcon = styled(NavLink)`
  cursor: pointer;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
