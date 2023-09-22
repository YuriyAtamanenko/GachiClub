// import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { Button, Svg } from './LogOutBtn.styled';

const LogOutBtn = () => {
  const dispatch = useDispatch();

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
