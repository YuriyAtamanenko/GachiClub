import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Modal = styled.div`
  width: 335px;
  position: fixed;
  z-index: 10;
  padding-bottom: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`;
export const LikeWraper = styled.div`
  width: 158px;
  height: 158px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 20px;
`;
export const Congratulation = styled.h2`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32px / 24px);
  margin-bottom: 16px;
`;
export const StatItem = styled.li`
  display: flex;
`;
export const StatName = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
  margin-right: 8px;
`;
export const StatInfo = styled.span`
  color: #e6533c;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
`;
export const Button = styled.button`
  width: 157px;
  height: 42px;
  border: none;
  margin-top: 24px;
  margin-bottom: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18px / 16px);
  @media screen and (min-width: 768px) {
    width: 162px;
    height: 52px;
    margin-top: 32px;
  }
`;
export const StyledLink = styled(Link)`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  line-height: calc(18px / 14px);
`;
export const CloseButton = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
