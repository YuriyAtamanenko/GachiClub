// import React from 'react';
import PropTypes from 'prop-types';

import { ButtonSubmit } from './AuthFormButtons.styled';

const AuthFormButton = ({ text, type }) => (
  <ButtonSubmit type={type}>{text}</ButtonSubmit>
);

AuthFormButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthFormButton;
