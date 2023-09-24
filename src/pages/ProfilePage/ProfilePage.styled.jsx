import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 40px;
`;

export const Title = styled.h1`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  margin-bottom: 40px;
  
  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
  }
`;

export const UserContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
