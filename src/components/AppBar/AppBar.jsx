import { useAuth } from '../../hooks/useAuth';
import Logo from '../Header/Logo/Logo';
import MobileMenu from '../Header/MobileMenu/MobileMenu';
import Navigation from '../Header/Navigation/Navigation';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header isLoggedIn={isLoggedIn}>
      <Logo />
      {isLoggedIn && (
        <>
          <Navigation />
          <MobileMenu />
        </>
      )} 
    </Header>
  );
};

export default AppBar;
