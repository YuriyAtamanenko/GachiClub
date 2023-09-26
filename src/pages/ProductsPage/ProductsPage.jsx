import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, ContainerForm } from './ProductsPage.styled';
import ProductsFilter from '../../components/Products/ProductsFilter/ProductsFilter';
import ProdactsList from '../../components/Products/ProductsList/ProductsList';
import { getAllProducts } from '../../redux/Products/operations';
import { selectFilter } from '../../redux/Products/selectors';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getAllProducts(params));
  }, [dispatch, params]);

  return (
    <Container>
      <ContainerForm>
        <Title>Products</Title>
        <ProductsFilter />
      </ContainerForm>
      <ProdactsList />
    </Container>
  );
};

export default ProductsPage;
