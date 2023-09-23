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
  box-sizing: border-box;
  width: 335px;
  height: 46px;
  padding: 14px;
  padding-right: 68px;
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
`;
