import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Container, Header, LoaderStyled } from './Layout.styled';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../Loader/Loader';

const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header isLoggedIn={isLoggedIn}>
        <AppBar />
      </Header>
      <Suspense
        fallback={
          <LoaderStyled>
            <Loader />
          </LoaderStyled>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
