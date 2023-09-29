import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  @media screen and (min-width: 1440px) {
    max-height: 726px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 80px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: #ef8964;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 34px;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    max-height: calc(100vh - 364px);
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
  }
  @media screen and (min-width: 1440px) {
    max-height: calc(100vh - 425px);
    width: 850px;
    max-width: 100%;
  }
`;
export const ImageWraper = styled.div`
  display: none;
  position: absolute;
  width: 400px;
  height: 726px;
  right: 96px;
  z-index: -1;
  top: 85px;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;
