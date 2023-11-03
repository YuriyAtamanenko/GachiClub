import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoaggedIn } = useSelector(state => state.auth); // це для того щоб не було редіректу на логін поки не завантажиться токен
  return isLoaggedIn ? <Navigate to={redirectTo} /> : <Component />; // якщо залогінений, то рендеримо компонент
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Тип компонента, который ожидается в пропсах
  redirectTo: PropTypes.string, // Опциональная строка для редиректа
};


