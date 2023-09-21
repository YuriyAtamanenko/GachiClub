import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Authorization/operations';

const AppBar = () => {
  // const { email } = useSelector(state => state.auth.user); // витягуємо email зі стейта
  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logOut());
  // };

  return (
    <div>
      <div>AppBar</div>
      <div>
        <button type="primary" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AppBar;
