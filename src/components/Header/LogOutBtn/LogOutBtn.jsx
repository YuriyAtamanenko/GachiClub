// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
import sprite from '../../../images/sprite.svg';
import { Button, Svg } from './LogOutBtn.styled';

const LogOutBtn = () => {
  // const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();
  return (
    <Button
      type="button"
      // onClick={() => dispatch(logOut())}
    >
      Logout
      <Svg>
        <use href={sprite + `#icon-log-out`}></use>
      </Svg>
    </Button>
  );
};

export default LogOutBtn;
