import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { logOut } from '../../../redux/Authorization/operations';
import { Button, Container, Link, Nav, Svg } from './NavigationMob.styled';

const NavigationMob = ({ closeNav }) => {
  const handleLinkClick = () => {
    closeNav();
  };
  const dispatch = useDispatch();
  return (
    <Nav>
      <Container>
        <Link to="/diary" onClick={handleLinkClick}>
          Diary
        </Link>
        <Link to="/products" onClick={handleLinkClick}>
          Products
        </Link>
        <Link to="/exercises" onClick={handleLinkClick}>
          Exercises
        </Link>
      </Container>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
        <Svg>
          <use href={sprite + `#icon-log-out-white`}></use>
        </Svg>
      </Button>
    </Nav>
  );
};

export default NavigationMob;
