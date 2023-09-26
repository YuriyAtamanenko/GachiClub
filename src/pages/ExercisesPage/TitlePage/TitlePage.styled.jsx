import styled from 'styled-components';
export const Title = styled.h1`
  margin-bottom: 20px;
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 'calc(28px / 24px)';
  @media screen and (min-width: 768px) {
    font-size: 32px;
    display: inline;
    margin-bottom: 0;
    line-height: 'calc(44px / 32px)';
  }
`;
