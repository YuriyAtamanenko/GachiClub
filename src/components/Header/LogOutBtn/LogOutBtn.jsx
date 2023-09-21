import { useDispatch } from 'react-redux';
import { logOut } from '../../../Redux/Authorization/operations';
import sprite from '../../../images/sprite.svg';
import { Button, Svg } from './LogOutBtn.styled';

// import { logOut } from '../../Redux/Authorization/operations';
// import { useDispatch } from 'react-redux';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();
  return (
    <Button type="button" onClick={() => dispatch(logOut())}>
      Logout
      <Svg>
        <use href={sprite + `#icon-log-out`}></use>
      </Svg>
    </Button>
  );
};

export default LogOutBtn;
