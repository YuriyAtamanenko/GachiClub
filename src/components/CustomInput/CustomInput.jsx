import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { StyledInput, Icon } from './CustomInput.styled';
import sprite from '../../images/sprite.svg';

const CustomInput = forwardRef(({ value, onClick }, ref) => {
   
  return (
    <>
      <StyledInput
        onClick={onClick}
        ref={ref}
     
        value={value || 'Birthday'}
        readOnly
        name="name"
      />
      <Icon
        className="icon"
        width="16"
        height="16"
        fill="currentColor"
        onClick={onClick}
      >
        <use href={`${sprite}#icon-calendar`} />
      </Icon>
    </>
  );
});

CustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.any,
  readOnly: PropTypes.bool,
  name: PropTypes.string,
};

CustomInput.displayName = 'CustomInput';

export default CustomInput;
