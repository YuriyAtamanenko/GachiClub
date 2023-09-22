import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Container, Header } from './Layout.styled';
import { useAuth } from '../../hooks/useAuth';

const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header isLoggedIn={isLoggedIn}>
        <AppBar />
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
