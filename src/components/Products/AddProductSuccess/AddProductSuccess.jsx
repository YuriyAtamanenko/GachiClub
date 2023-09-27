import sprite from '../../../../src/images/sprite.svg';

import avocado from '../../../../src/images/avocado-2x.png';
import PropTypes from 'prop-types';
import {
  SuccessModalWindow,
  SuccessModalWindowWrapper,
  SuccessModalWindowWrapImg,
  SuccessModalWindowImg,
  SuccessModalWindowTitle,
  SuccessModalWindowText,
  SuccessModalWindowSpan,
  SuccessModalWindowButton,
  ArrowButton,
} from './AddProductSuccess.styles';
import { Link } from 'react-router-dom';

const AddProductSuccess = ({ closeSuccessModal, calories }) => {
  return (
    <SuccessModalWindow>
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
            <ArrowButton>
              <use href={sprite + 'icon-right'}> </use>
            </ArrowButton>
          </SuccessModalWindowText>
        </Link>
      </SuccessModalWindowWrapper>
    </SuccessModalWindow>
  );
};

AddProductSuccess.propTypes = {
  closeSuccessModal: PropTypes.func,
  calories: PropTypes.number,
};

export default AddProductSuccess;
