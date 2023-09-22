import styled from 'styled-components';
import { Button } from '../Header/LogOutBtn/LogOutBtn.styled';

export const CurrentUser = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid var(--bright-accent-color);
  background-color: rgba(48, 48, 48, 0.3);
  margin-bottom: 31px;
  contain: content;
`;
export const UserAvatar = styled.div`
  position: relative;
`;
export const SceletUser = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CheckMark = styled.button`
  position: absolute;
  left: 50%;
  top: 77px;
  padding: 0;
  border: none;
  transform: translate(-50%, 0);
  background-color: transparent;
  z-index:1;
}
`;

export const CurrentUserName = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 4px;
`;

export const UserPlate = styled.p`
  text-align: center;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 32px;
`;

export const Plates = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  & > :first-child {
    margin-right: 14px;
  }
`;

export const Plate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 214px;
  height: 96px;
  padding: 13px;
  background-color: var(--bright-accent-color);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 211px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Ico = styled.img`
  margin-right: 8px;
`;
export const DailyText = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;

export const BtnLogOut = styled(Button)``;

export const WarningContainer = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    margin-top: -5px;
    margin-right: 8px;
  }

  @media screen and (min-width: 768px) {
    max-width: 439px;
    margin-left: auto;
    margin-right: auto;
    p {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;

export const WarningText = styled.p`
  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 18px;
`;
