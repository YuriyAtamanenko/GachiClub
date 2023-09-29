import PropTypes from 'prop-types';
import { Button } from './ButtonInput.styled';

export default function ButtonInput({ children, onClick, right, type }) {
  return (
    <Button onClick={onClick} right={right} type={type}>
      {children}
    </Button>
  );
}

ButtonInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  right: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.object.isRequired,
};
