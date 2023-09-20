import sprite from '../../../images/sprite.svg';
import { Button, Container, Link, Nav, Svg } from './NavigationMob.styled';

const NavigationMob = () => {
  return (
    <Nav>
      <Container>
        <Link to="/diary">Diary</Link>
        <Link to="/products">Products</Link>
        <Link to="/exercises">Exercises</Link>
      </Container>
      <Button
        type="button"
        // onClick={() => dispatch(logOut())}
      >
        Logout
        <Svg>
          <use href={sprite + `#icon-log-out-white`}></use>
        </Svg>
      </Button>
    </Nav>
  );
};

export default NavigationMob;
