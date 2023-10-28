// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReLink, LinkStyle } from './AuthFormLink.styled';

const AuthFormLink = ({ text, textLink, to }) => (
  <ReLink>
    {text}
    <LinkStyle to={to}>{textLink}</LinkStyle>
  </ReLink>
);

AuthFormLink.propTypes = {
  text: PropTypes.string.isRequired,
  textLink: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default AuthFormLink;
