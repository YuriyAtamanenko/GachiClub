import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: inline-flex;
    margin-left: auto;
  }
`;
export const Category = styled.button`
  color: rgba(239, 237, 232, 0.4);
  position: relative;
  cursor: pointer;
  font-family: 'Roboto';
  padding-bottom: 3px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  line-height: 'calc(18px / 14px)';
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 'calc(24px / 16px)';
  }
`;
export const ActiveCategory = styled.button`
  color: #efede8;
  position: relative;
  cursor: pointer;
  font-family: 'Roboto';
  padding-bottom: 3px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  line-height: 'calc(18px / 14px)';
  color: #efede8;
  &::after {
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 2px;
    background-color: #ef8964;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 'calc(24px / 16px)';
  }
`;
export const CategoryGroup = styled.ul`
  display: flex;
  @media screen and (min-width: 768px) {
    display: inline-flex;
    vertical-align: middle;
  }
`;
export const CategoryItem = styled.li`
  &:not(:last-child) {
    margin-right: 28px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;
