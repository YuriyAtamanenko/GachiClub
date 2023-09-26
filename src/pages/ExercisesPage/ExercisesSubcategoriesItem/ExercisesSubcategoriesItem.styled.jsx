import styled from 'styled-components';
export const Card = styled.li`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  flex-basis: calc((75% - 16px) / 3);
  @media screen and (min-width: 1440px) {
    max-width: 234px;
    flex-basis: calc((100% - 16px) / 5);
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const CardContent = styled.div`
  position: relative;
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.5) 0%,
    rgba(4, 4, 4, 0.5) 100%
  );
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
  &:hover,
  &:focus {
    border: 2px solid red;
  }
`;
export const CardPicture = styled.img`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  width: 100%;
  height: 100%;
`;
export const CategoryBlock = styled.div`
  position: absolute;
  zindex: 5;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
export const Subscription = styled.h3`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: calc(24px / 20px);
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32px / 24px);
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(28px / 24px);
  }
`;
export const Category = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 'calc(18px / 12px)';
`;
