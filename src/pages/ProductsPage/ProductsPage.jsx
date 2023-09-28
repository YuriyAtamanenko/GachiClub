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
import { selectFilter } from '../../redux/Products/selectors';
import Loader from '../../components/Loader/Loader';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectFilter);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProducts(params)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, params]);

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
    </Container>
  );
};

export default ProductsPage;
