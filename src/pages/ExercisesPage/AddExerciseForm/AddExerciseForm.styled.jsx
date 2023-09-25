import styled from 'styled-components';
export const Modal = styled.div`
  width: 335px;
  z-index: 5;
  display: flex;
  position: relative;
  justify-content: center;
  padding: 48px 16px;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
  transition: transform 0.3s ease;
  ${props =>
    props.isOpen &&
    `
    transform: translate(-50%, -50%) scale(1);
  `}
  transform: translate(-50%, -50%) scale(0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  @media screen and (min-width: 768px) {
    width: 694px;
    padding: 48px 32px;
    flex-direction: row;
  }
`;
export const PictureWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 270px;
  height: 226px;
  margin-bottom: 14px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;
export const AnimatedImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.2) 0%,
    rgba(4, 4, 4, 0.2) 100%
  );
`;
export const StaticsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
export const StatisticsItem = styled.li`
  padding: 12px 18px;
  width: 147px;
  height: 62px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 8px) / 2);
  @media screen and (min-width: 768px) {
    width: 168px;
    height: 70px;
  }
`;
export const StatisticSubtitle = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: calc(16px / 12px);
  @media screen and (min-width: 768px) {
    line-height: calc(18px / 12px);
    margin-bottom: 8px;
  }
`;
export const StatisticInfo = styled.span`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18px / 14px);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24px / 16px);
  }
`;
export const AddButton = styled.button`
  display: inline-flex;
  width: 151px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18px / 16px);
  border: none;
  @media screen and (min-width: 768px) {
    margin-top: auto;
    margin-left: auto;
    height: 52px;
    line-height: calc(24px / 16px);
  }
`;
export const StatisticsWraper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CloseButton = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
export const OverflowHidden = styled.div`
  overflow: hidden;
`;
