import styled from 'styled-components';
export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(4, 4, 4, 0.4);
  position: fixed;
  top: 0;
  overflow-y: scroll;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
