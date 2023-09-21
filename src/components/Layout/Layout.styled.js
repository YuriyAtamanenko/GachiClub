import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;

export const Header = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: ${props => (props.isLoggedIn ? 'relative' : 'absolute')};
  border-bottom: ${props => (props.isLoggedIn ? '1px solid rgba(239, 237, 232, 0.2)' : 'none')};
  padding: ${props => (props.isLoggedIn ? '24px 0' : '24px 20px')};
  @media screen and (min-width: 768px) {
    padding: ${props => (props.isLoggedIn ? '19px 0' : '32px 32px')};
  }
  @media screen and (min-width: 1440px) {
    padding: ${props => (props.isLoggedIn ? '19px 0' : '32px 96px')};
  }
`;