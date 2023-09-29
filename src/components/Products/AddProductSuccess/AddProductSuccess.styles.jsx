import styled from '@emotion/styled';
export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(4, 4, 4, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 1;
  transform: scale(100);
  transform: rotate(0deg);
  visibility: visible;
  transition:
    opacity 1000ms linear,
    transform 500ms linear;
`;
export const ModalHidden = styled.div`
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  transform: rotate(360deg);
`;
export const SuccessModalWindow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  background-color: #10100f;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`;
export const ButtonIcon = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 14px;
  right: 14px;
`;
export const SuccessModalWindowWrapper = styled.div`
  padding: 48px 89px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 64px 134px;
  }
`;

export const SuccessModalWindowWrapImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuccessModalWindowImg = styled.img`
  width: 123px;
  height: 97px;
  margin-bottom: 19px;
`;

export const SuccessModalWindowTitle = styled.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const SuccessModalWindowText = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SuccessModalWindowSpan = styled.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SuccessModalWindowButton = styled.button`
  border-radius: 12px;
  background: #e6533c;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
  color: #efede8;
  font-size: 16px;
  height: 42px;
  width: 157px;
  font-weight: 500;
  line-height: calc(24 / 16);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    height: 52px;
  }

  &:hover,
  &:focus {
    background: #ef8964;
    color: #efede8;
  }
`;

export const ArrowButton = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #efede8;
`;
