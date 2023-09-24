import { Container, Title } from './ProductsPage.styled';
import ProductsFilter from '../../components/Products/ProductsFilter/ProductsFilter';
import ProdactsList from '../../components/Products/ProductsList/ProductsList';

const ProductsPage = () => {
  return (
    <Container>
      <>
        <Title>Products</Title>
        <ProductsFilter />
        <ProdactsList />
      </>
    </Container>
  );
};

export default ProductsPage;
