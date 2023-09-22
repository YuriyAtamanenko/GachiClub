// import { useDispatch } from 'react-redux';
import { logOut } from '../../../Redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { Button, Svg } from './LogOutBtn.styled';
import PropTypes from 'prop-types';

const LogOutBtn = ({ customStyles }) => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      customStyles={customStyles}
      onClick={() => dispatch(logOut())}
    >
      Logout
      <Svg>
        <use href={sprite + `#icon-log-out`}></use>
      </Svg>
    </Button>
  );
};

export default LogOutBtn;
LogOutBtn.propTypes = {
  customStyles: PropTypes.object,
};
