import styled from 'styled-components';
export const Container = styled.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    width: 704px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1248px;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: rgba(239, 237, 232, 0.4);
  display: inline-flex;
  margin-bottom: 12px;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: calc(24px / 16px);
  }
`;
export const TitlesWraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  }
`;
