import { useSelector } from 'react-redux';
import {
  selectBodyData,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/Authorization/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const bodyData = useSelector(selectBodyData);

  const isBodyData = Object.keys(bodyData).length !== 0;
  // const error = useSelector(selectError);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    isBodyData,
    // error,
  };
};
