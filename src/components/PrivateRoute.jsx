import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo: addres }) => {
  // це для того щоб не було редіректу на логін поки не завантажиться токен
  const { isLoaggedIn, isRefreshing } = useSelector(state => state.auth);

  // якщо не залогінений і не завантажується токен, то редірект на логін
  const shouldRedirect = !isLoaggedIn && !isRefreshing;

  // якщо залогінений, то рендеримо компонент
  return shouldRedirect ? <Navigate to={addres} /> : <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Тип компонента, который ожидается в пропсах
  redirectTo: PropTypes.string, // Опциональная строка для редиректа
};
