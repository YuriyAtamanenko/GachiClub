import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoIcon = styled(NavLink)`
  cursor: pointer;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  @media screen and (min-width: 768px) {
    padding: 19px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 19px 96px;
  }
`;