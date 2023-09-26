import { useEffect } from 'react';
// import { Overlay } from './BasicModalWindow.styled';
import css from './BasicModalWindow.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectModal } from '../../../redux/Exercises/selectors';
import { setModalToggle } from '../../../redux/Exercises/reducer';
const BasicModalWindow = ({ children }) => {
  const isModalOpen = useSelector(selectModal);
  const dispatch = useDispatch();
  useEffect(() => {
    const closeByEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(setModalToggle());
      }
    };
    document.addEventListener('keydown', closeByEsc);
    return () => {
      document.removeEventListener('keydown', closeByEsc);
    };
  }, [dispatch]);
  const backgroundCloseModal = evt => {
    if (evt.target === evt.currentTarget) {
      dispatch(setModalToggle());
    }
  };
  return (
    <div
      className={`${isModalOpen ? css.overlayhidden : css.overlay}`}
      onClick={backgroundCloseModal}
    >
      {children}
    </div>
  );
};
export default BasicModalWindow;
BasicModalWindow.propTypes = {
  children: PropTypes.object,
};
