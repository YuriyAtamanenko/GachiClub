import styled from 'styled-components';

export const ContainerForm = styled.ul`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    justify-content: flex-end;
  }
`;

export const InputForm = styled.input`
  @media screen and (min-width: 375px) {
    box-sizing: border-box;
    width: 335px;
    height: 46px;
    padding: 14px;
    padding-right: 68px;
    background-color: transparent;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    outline: none;
    &:hover,
    &:focus {
      border: 1px solid #e6533c;
    }
    &::placeholder {
      color: #efede8;
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    height: 52px;
    &::placeholder {
      color: #efede8;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Form = styled.label`
  position: relative;
`;

export const Button = styled.button`
  border: none;
  display: flex;
  padding: 0;

  background: transparent;
  position: absolute;

  top: calc(50% - 16px / 2);
  right: 14px;
`;

export const Search = styled.svg`
  width: 18px;
  height: 18px;
`;
export const SearchBtn = styled.button`
  top: calc(50% - 16px / 2);
  right: 40px;
  border: none;
  display: flex;
  padding: 0;
  background: transparent;
  position: absolute;
`;

export const CloseBtn = styled.svg`
  fill: #e6533c;
  width: 18px;
  height: 18px;
`;

export const Select = styled.select`
  @media screen and (min-width: 375px) {
    position: relative;
    /* appearance: none; */

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding-left: 14px;
    padding-right: 14px;

    height: 46px;
    width: 146px;

    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    outline: none;

    color: #efede8;
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    width: 192px;
  }
`;

export const SelectAll = styled.select`
  @media screen and (min-width: 375px) {
    position: relative;
    /* appearance: none; */

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding-left: 14px;
    padding-right: 14px;

    height: 46px;
    width: 173px;

    outline: none;

    color: #efede8;
    background-color: transparent;
    &::placeholder {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    width: 204px;

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;

export const Option = styled.option`
  @media screen and (min-width: 375px) {
    background-color: rgba(28, 28, 28, 1);
    border-radius: 12px;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    cursor: 'pointer';
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const SelectPointer = styled.svg`
  width: 18px;
  height: 18px;
  fill: #ffff;
`;
