import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useEffect, lazy } from 'react';
import Layout from './../components/Layout/Layout';
import { refreshUser } from '../redux/Authorization/operations';
// import { refreshUser } from 'Redux/Authorization/operations';

import { PrivateRoute } from './PrivateRoute'; // для захисту роутів
import { RestrictedRoute } from './RestrictedRoute';

// import { PrivateRoute } from './PrivateRoute'; // для захисту роутів
// import { RestrictedRoute } from './RestrictedRoute';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const UserDataPage = lazy(() => import('../pages/UserDataPage/UserDataPage'));

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser()); // для обновления токена
  }, [dispatch]);

  const { isRefreshing } = useSelector(state => state.auth);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />

        {/* <Route path="/signup" element={<SignUpPage />} /> */}
        {/* <Route path="/signin" element={<SignInPage />} /> */}

        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/params" // Перенаправить на страницу профиля после регистрации
              component={SignUpPage}
            />
          }
        />

        <Route path="/userdata" element={<UserDataPage />} />

        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/params" component={SignInPage} />
          }
        />

        <Route
          path="/params"
          element={
            <RestrictedRoute component={ParamsPage} redirectTo="/diary" />
          }
        />

        <Route
          path="/diary"
          element={<PrivateRoute component={DiaryPage} redirectTo="/signin" />}
        />

        <Route
          path="/products"
          element={
            <PrivateRoute component={ProductsPage} redirectTo="/signin" />
          }
        />

        <Route
          path="/exercises"
          element={
            <PrivateRoute component={ExercisesPage} redirectTo="/signin" />
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute component={ProfilePage} redirectTo="/signin" />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  ) : null;
}
export default App;
