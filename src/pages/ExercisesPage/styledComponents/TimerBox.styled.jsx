import styled from 'styled-components';
export const TimeSpinner = styled.div`
  width: 125px;
  margin-top: 4px;
  margin-bottom: 14px;
  height: 125px;
  display: inherit;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(239, 237, 232, 0.1);
`;
export const SpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const TimePauseButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: #e6533c;
  color: #efede8;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;
export const TimeLeft = styled.span`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  line-height: calc(24px / 16px);
  position: absolute;
  top: 65px;
`;
export const TimeText = styled.p`
  text-align: center;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 10px;
  line-height: calc(14px / 10px);
`;
export const Calories = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  line-height: calc(18px / 14px);
`;
export const CaloriesValue = styled.span`
  color: #e6533c;
`;
export const CircleIcon = styled.svg`
  rotate: 90deg;
  height: 125px;
  width: 125px;
  margin-bottom: 14px;
`;

export const InactiveCircle = styled.circle`
  fill: transparent;
  stroke-width: 4;
  stroke: rgba(239, 237, 232, 0.1);
`;

export const ActiveCircle = styled.circle`
  fill: transparent;
  stroke-width: 4;
  stroke: #e6533c;
  transition: stroke-dashoffset 0.25s linear;
`;
