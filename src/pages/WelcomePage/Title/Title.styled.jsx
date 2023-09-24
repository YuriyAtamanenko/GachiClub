import styled from '@emotion/styled';

export const Text = styled.h1`
  color: #efede8;
  font-size: 38px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.38px;
  margin-bottom: 40px;

  & > span {
    position: relative;
    display: inline-block;
    z-index: 1;

    & > svg {
      position: absolute;
      z-index: -1;
      width: 98px;
      height: 35px;
      left: -10px;
      top: 1px;

      @media screen and (min-width: 768px) {
        width: 185px;
        height: 67px;
        left: -20px;
        top: 8px;
      }
    }
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    margin-bottom: 40px;
    line-height: 105.26%;
  }

  @media screen and (min-width: 768px) {
    width: 598px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;
    margin-bottom: 64px;
  }
`;
