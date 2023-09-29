import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Backdrop,
  Container,
  InputContainer,
  InputTitle,
  InputQuantity,
  AddBtn,
  CloseBtn,
  BtnContainer,
  Calories,
  TitleCalories,
  ButtonIcon,
} from './AddProductModal.styled';
import sprite from '../../images/sprite.svg';
import { addProductThunk } from '../../redux/Diary/operations';

function AddProductForm({
  data,
  closeAddModal,
  openSuccessModal,
  setAmoutnCalories,
}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const caloriesAmount = Math.round((quantity * data.calories) / 100);

  const handleAddToDiary = () => {
    if (!caloriesAmount) {
      console.log('Must be greater than 0');
      return;
    }
    const req = {
      productId: data._id,
      calories: caloriesAmount,
      amount: quantity,
    };

    dispatch(addProductThunk(req));

    setAmoutnCalories(caloriesAmount);
    closeAddModal();
    openSuccessModal();
    return caloriesAmount;
  };

  return (
    <Backdrop>
      <Container>
        <ButtonIcon type="button">
          <svg width="22" height="22" stroke="#EFEDE8">
            <use href={sprite + '#icon-close'} />
          </svg>
        </ButtonIcon>
        <form>
          <InputContainer>
            <label>
              <InputTitle type="text" value={data.title} disabled />
            </label>

            <label>
              <InputQuantity
                placeholder="grams"
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </label>
          </InputContainer>

          <Calories>
            <TitleCalories>Calories:</TitleCalories> {caloriesAmount}
          </Calories>

          <BtnContainer>
            <AddBtn type="button" onClick={handleAddToDiary}>
              Add to diary
            </AddBtn>
            <CloseBtn type="button" onClick={closeAddModal}>
              Cancel
            </CloseBtn>
          </BtnContainer>
        </form>
      </Container>
    </Backdrop>
  );
}

AddProductForm.propTypes = {
  data: PropTypes.object,
  closeAddModal: PropTypes.func,
  addProduct: PropTypes.func,
  openSuccessModal: PropTypes.func,
  setAmoutnCalories: PropTypes.func,
};
export default AddProductForm;
