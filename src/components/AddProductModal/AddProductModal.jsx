import { useState } from 'react';
import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
// const rootModal = document.querySelector('#root-modal');

import {
  Container,
  InputContainer,
  InputTitle,
  InputQuantity,
  AddBtn,
  CloseBtn,
  BtnContainer,
  Calories,
  TitleCalories,
} from './AddProductModal.styled';

const formatDate = date => {
  const dateObject = date;
  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  const formatted_date = day + '-' + month + '-' + year;
  return formatted_date;
};

function AddProductForm({ data, closeAddModal, addProduct }) {
  const [quantity, setQuantity] = useState(0);

  const amount = Math.round((quantity * data.calories) / 100);
  const date = formatDate(new Date());

  return (
    <Container>
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
          <TitleCalories>Calories:</TitleCalories> {amount}
        </Calories>

        <BtnContainer>
          <AddBtn
            type="button"
            onClick={() => {
              addProduct({
                id: data._id,
                date,
                amount: quantity,
                calories: amount,
              });
              closeAddModal();
            }}
          >
            Add to diary
          </AddBtn>
          <CloseBtn type="button" onClick={closeAddModal}>
            Cancel
          </CloseBtn>
        </BtnContainer>
      </form>
    </Container>
  );
}

AddProductForm.propTypes = {
  data: PropTypes.object,
  closeAddModal: PropTypes.func,
  addProduct: PropTypes.func,
};

export default AddProductForm;
