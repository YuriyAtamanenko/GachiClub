import styled from '@emotion/styled';

export const ListContainer = styled.ul`
  display: flex;

  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    align-content: flex-start;
    height: 487px;
    column-gap: 16px;
    row-gap: 32px;
    overflow-y: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`;

export const Item = styled.ul`
  border: 1px solid white;
  width: 100%;
  height: 141px;
  padding: 10px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 141px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    height: 141px;
  }
`;
