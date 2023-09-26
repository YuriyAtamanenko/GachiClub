import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Title, ContainerForm } from './ProductsPage.styled';
import ProductsFilter from '../../components/Products/ProductsFilter/ProductsFilter';
import ProdactsList from '../../components/Products/ProductsList/ProductsList';
import { getAllProducts } from '../../redux/Products/operations';

const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
