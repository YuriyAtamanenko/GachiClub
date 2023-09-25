import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
`;
