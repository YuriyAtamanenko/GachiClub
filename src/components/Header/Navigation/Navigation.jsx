import UserNav from '../UserNav/UserNav';
import { UserBar } from '../UserBar/UserBar';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <UserNav />
      <UserBar />
      <LogOutBtn />
    </Nav>
  );
};

export default Navigation;
