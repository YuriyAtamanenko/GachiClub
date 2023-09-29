import { useEffect, useState } from 'react';
import css from './BasicModalWindow.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';
import AddExerciseSuccess from '../AddExerciseSuccess/AddExerciseSuccess';
import { getIsSuccess, selectModal } from '../../../redux/Exercises/selectors';
import {
  setModalToggle,
  toggleSuccess,
} from '../../../redux/Exercises/reducer';
const BasicModalWindow = ({ data }) => {
  const [currentTime, setCurrentTime] = useState(180);
  const isSuccess = useSelector(getIsSuccess);
  const isModalOpen = useSelector(selectModal);
  const dispatch = useDispatch();
  useEffect(() => {
    const closeByEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(setModalToggle());
        setCurrentTime(180);
        if (isSuccess) {
          dispatch(toggleSuccess());
        }
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
      setCurrentTime(180);
      if (isSuccess) {
        dispatch(toggleSuccess());
      }
    }
  };
  return (
    <div
      className={`${isModalOpen && data ? css.overlayhidden : css.overlay}`}
      onClick={backgroundCloseModal}
    >
      {!isSuccess ? (
        <AddExerciseForm
          data={data}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      ) : (
        <AddExerciseSuccess
          data={data}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      )}
    </div>
  );
};
export default BasicModalWindow;
BasicModalWindow.propTypes = {
  data: PropTypes.object,
};
