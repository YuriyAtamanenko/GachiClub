// import { useAuth } from 'hooks';
import { useState } from 'react';
import Logo from '../Header/Logo/Logo';
import MobileMenu from '../Header/MobileMenu/MobileMenu';
import Navigation from '../Header/Navigation/Navigation';
import { Header } from './AppBar.styled';

const AppBar = () => {
  // const { isLoggedIn } = useAuth();
  return (

      <Header>
        <Logo />
        <Navigation />
        {/* {isLoggedIn && <Navigation />} */}
       <MobileMenu/>
      </Header>

  );
};

export default AppBar;
