// import { useAuth } from 'hooks';
// import { useState } from 'react';
import Logo from '../Header/Logo/Logo';
import MobileMenu from '../Header/MobileMenu/MobileMenu';
import Navigation from '../Header/Navigation/Navigation';
import { Header } from './AppBar.styled';
// import { logOut } from '../../Redux/Authorization/operations';
// import { useDispatch } from 'react-redux';

const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  // const { email } = useSelector(state => state.auth.user); // витягуємо email зі стейта
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logOut());
  // };

  return (
    <Header>
      <Logo />
      <Navigation />
      {/* {isLoggedIn && <Navigation />} */}
      <MobileMenu />
    </Header>

    /* <div>
        <div>AppBar</div>
        <div>
          <button type="primary" onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </div>
      </div> */
  );
};

export default AppBar;
