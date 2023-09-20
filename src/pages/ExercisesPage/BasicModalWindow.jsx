import { Overlay, Modal } from './styledComponents/BasicModalWindow.styled';
const BasicModalWindow = ({ children }) => {
  return (
    <Overlay>
      <Modal>{children}</Modal>
    </Overlay>
  );
};
export default BasicModalWindow;
