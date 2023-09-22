import styled from 'styled-components';
export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Modal = styled.div`
  width: 335px;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 48px 16px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
`;
