import { logOut } from '../../../redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { Button, Svg } from './LogOutBtn.styled';
// import { useEffect } from 'react';

const LogOutBtn = ({ customStyles }) => {
  const dispatch = useDispatch();

    // const handleLogOut = async () => {
    //   try {
    //     await dispatch(logOut()); // 
    //     alert('Ви вийшли з системи');
    //   } catch (error) {
    //     alert(`Помилка: ${error.message}`);
    //   }
    // };

    // useEffect(() => {
    //   localStorage.clear();
    // }, []);

  return (
    <Button
      type="button"
      // onClick={handleLogOut}
      onClick={() => dispatch(logOut())}
      style={customStyles}
    >
      Logout
      <Svg>
        <use href={sprite + `#icon-log-out`}></use>
      </Svg>
    </Button>
  );
};

export default LogOutBtn;
