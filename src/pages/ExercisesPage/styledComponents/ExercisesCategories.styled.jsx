import styled from 'styled-components';
export const Category = styled.button`
  color: rgba(239, 237, 232, 0.4);
  position: relative;
  cursor: pointer;
  font-family: 'Roboto';
  padding-bottom: 3px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  lineheight: 'calc(18px / 14px)';
  &:active {
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
  }
`;
