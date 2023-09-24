import { Container, Title, ContainerForm } from './ProductsPage.styled';
import ProductsFilter from '../../components/Products/ProductsFilter/ProductsFilter';
import ProdactsList from '../../components/Products/ProductsList/ProductsList';

const ProductsPage = () => {
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
