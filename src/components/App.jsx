import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const ParamsPage = lazy(() => import('../pages/ParamsPage/ParamsPage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() =>
  import('../pages/ExercisesPage/ExercisesPage'),
);
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/params" element={<ParamsPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
