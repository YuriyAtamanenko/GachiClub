import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
