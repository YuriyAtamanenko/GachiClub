import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Title,
  ContainerForm,
  LoadContainer,
} from './ProductsPage.styled';
import ProductsFilter from '../../components/Products/ProductsFilter/ProductsFilter';
import ProdactsList from '../../components/Products/ProductsList/ProductsList';
import { getAllProducts } from '../../redux/Products/operations';
import {
  selectAddModal,
  selectFilter,
  selectInfo,
  selectSuccessModal,
} from '../../redux/Products/selectors';
import {
  addModalReducer,
  successModalReducer,
} from '../../redux/Products/productsSlice';
import AddProductForm from '../../components/AddProductModal/AddProductModal';
import AddProductSuccess from '../../components/Products/AddProductSuccess/AddProductSuccess';
import Loader from '../../components/Loader/Loader';
const ProductsPage = () => {
  const [amoutnCalories, setAmoutnCalories] = useState(0);
  const dispatch = useDispatch();
  const params = useSelector(selectFilter);
  const isAddModalOpen = useSelector(selectAddModal);
  const isSuccessModalOpen = useSelector(selectSuccessModal);
  const info = useSelector(selectInfo);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProducts(params)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, params]);

  const toggleAddModal = () => {
    dispatch(addModalReducer());
  };
  const toggleSuccessModal = () => {
    dispatch(successModalReducer());
  };
  return (
    <Container>
      <ContainerForm>
        <Title>Products</Title>
        <ProductsFilter />
      </ContainerForm>
      {isLoading ? (
        <LoadContainer>
          <Loader />
        </LoadContainer>
      ) : (
        <ProdactsList />
      )}
      {isAddModalOpen && (
        <AddProductForm
          setAmoutnCalories={setAmoutnCalories}
          closeAddModal={toggleAddModal}
          openSuccessModal={toggleSuccessModal}
          data={info}
        />
      )}
      {isSuccessModalOpen && (
        <AddProductSuccess
          closeSuccessModal={toggleSuccessModal}
          calories={amoutnCalories}
        />
      )}
    </Container>
  );
};

export default ProductsPage;
