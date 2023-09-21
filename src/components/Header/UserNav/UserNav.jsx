import { Container, Link } from './UserNav.styled';

const UserNav = () => {
  return (
    <Container>
      <Link to="/diary">Diary</Link>
      <Link to="/products">Products</Link>
      <Link to="/exercises">Exercises</Link>
    </Container>
  );
};

export default UserNav;
