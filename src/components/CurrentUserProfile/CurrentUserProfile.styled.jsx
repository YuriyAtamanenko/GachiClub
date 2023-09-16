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
