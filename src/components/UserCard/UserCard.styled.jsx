import styled from 'styled-components';

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
`;

export const SceletUser = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CheckMark = styled.button`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 0;
  border: none;
  background-color: transparent;
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

  &:last-child {
    flex-grow: 1;
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

export const Warning = styled.p``;

export const BtnLogOut = styled.button`
  width: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--primary-text-color);
  margin-bottom: 19px;
  margin-top: 41px;
`;


export const WarningContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WarningText = styled.p`
  margin-left: 8px;
  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 18px;
`;
