import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Card,
  FirstLine,
  SecondLine,
  ThirdLine,
  Badge,
  Circle,
  Recommended,
  AddButton,
  Arrow,
  Title,
  Additionally,
  Value,
} from './ProductsItem.styled';

import Icons from './../../../images/sprite.svg';
import AddProductForm from '../../AddProductModal/AddProductModal';

import { selectGroupBlood } from '../../../redux/Authorization/selector';
import AddProductSuccess from '../AddProductSuccess/AddProductSuccess';

const ProductsItem = ({ info }) => {
  const [amoutnCalories, setAmoutnCalories] = useState(0);
  const [isAddModalOpan, setAddModalOpan] = useState(false);
  const [isSuccessModalOpan, setSuccessModalOpan] = useState(false);
  const groupBlood = useSelector(selectGroupBlood);

  const toggleAddModal = () => {
    setAddModalOpan(isAddModalOpan => !isAddModalOpan);
  };

  const toggleSuccessModal = () => {
    setSuccessModalOpan(isSuccessModalOpan => !isSuccessModalOpan);
  };

  const addProduct = data => {
    setAmoutnCalories(data.calories);
    console.log('Відправляємо продукт в базу данних', data);
    toggleSuccessModal();
  };

  return (
    <Card>
      <FirstLine>
        <Badge>DIET</Badge>

        <Circle
          style={{
            backgroundColor: `${
              info.groupBloodNotAllowed[groupBlood] ? '#E9101D' : '#419B09'
            }`,
          }}
        ></Circle>
        <Recommended>
          {info.groupBloodNotAllowed[groupBlood]
            ? 'Not recommended'
            : 'Recommended'}
        </Recommended>

        <AddButton type="button" onClick={toggleAddModal}>
          Add
          <Arrow width={16} height={16}>
            <use href={Icons + '#icon-arrow-right'}></use>
          </Arrow>
        </AddButton>
      </FirstLine>

      <SecondLine>
        <svg width={24} height={24} fill="orange">
          <use href={Icons + '#icon-runningOnCircle'}></use>
        </svg>
        <Title>
          {info.title.length > 20
            ? `${info.title.slice(0, 20)}...`
            : info.title}
        </Title>
      </SecondLine>
      <ThirdLine>
        <Additionally>
          Calories: <Value>{info.calories}</Value>
        </Additionally>
        <Additionally>
          Category:{' '}
          <Value>
            {info.category.length > 10
              ? `${info.category.slice(0, 10)}...`
              : info.category}
          </Value>
        </Additionally>
        <Additionally>
          Weight: <Value>{info.weight}</Value>
        </Additionally>
      </ThirdLine>
      {isAddModalOpan && (
        <AddProductForm
          addProduct={addProduct}
          closeAddModal={toggleAddModal}
          toggleSuccessModal={toggleSuccessModal}
          data={info}
        />
      )}
      {isSuccessModalOpan && (
        <AddProductSuccess
          closeSuccessModal={toggleSuccessModal}
          calories={amoutnCalories}
        />
      )}
    </Card>
  );
};

export default ProductsItem;

ProductsItem.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    calories: PropTypes.number,
    groupBloodNotAllowed: PropTypes.shape({}),
  }).isRequired,
};
