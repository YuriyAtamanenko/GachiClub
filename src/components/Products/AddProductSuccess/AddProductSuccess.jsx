import sprite from '../../../images/sprite.svg';

import avocado from '../../../../src/images/avocado-2x.png';
import PropTypes from 'prop-types';
import {
  Backdrop,
  SuccessModalWindow,
  SuccessModalWindowWrapper,
  SuccessModalWindowWrapImg,
  SuccessModalWindowImg,
  SuccessModalWindowTitle,
  SuccessModalWindowText,
  SuccessModalWindowSpan,
  SuccessModalWindowButton,
  ArrowButton,
  ButtonIcon,
} from './AddProductSuccess.styles';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AddProductSuccess = ({ closeSuccessModal, calories }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeSuccessModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeSuccessModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeSuccessModal();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <SuccessModalWindow>
        <ButtonIcon type="button" onClick={closeSuccessModal}>
          <svg width="22" height="22" stroke="#EFEDE8">
            <use href={sprite + '#icon-close'} />
          </svg>
        </ButtonIcon>
        <SuccessModalWindowWrapper>
          <SuccessModalWindowWrapImg>
            <SuccessModalWindowImg src={avocado} alt="avocado" />
            <SuccessModalWindowTitle>Well done</SuccessModalWindowTitle>
            <SuccessModalWindowText>
              Calories:{' '}
              <SuccessModalWindowSpan>{calories}</SuccessModalWindowSpan>
            </SuccessModalWindowText>
          </SuccessModalWindowWrapImg>
          <Link to="/products">
            <SuccessModalWindowButton onClick={closeSuccessModal}>
              Next product
            </SuccessModalWindowButton>
          </Link>
          <Link to="/diary">
            <SuccessModalWindowText>
              To the diary
              <ArrowButton width="16" height="16" stroke="#EFEDE84D">
                <use href={sprite + '#icon-right'} />
              </ArrowButton>
            </SuccessModalWindowText>
          </Link>
        </SuccessModalWindowWrapper>
      </SuccessModalWindow>
    </Backdrop>
  );
};

AddProductSuccess.propTypes = {
  closeSuccessModal: PropTypes.func,
  calories: PropTypes.number,
};

export default AddProductSuccess;
