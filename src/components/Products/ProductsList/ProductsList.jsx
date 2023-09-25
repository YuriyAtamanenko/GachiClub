import { useSelector } from 'react-redux';
import {
  ListContainer,
  DefaultTextWrapper,
  DefaultText,
  AccentDefaultText,
} from './ProductsList.styled';
import ProductsItem from './../ProductsItem/ProductsItem';
import { selectProducts } from '../../../redux/Products/selectors';

const ProdactsList = () => {
  const items = useSelector(selectProducts);

  return (
    <ListContainer>
      {items.length > 0 ? (
        items
          .slice(0, 9)
          .map(item => <ProductsItem key={item._id} info={item}></ProductsItem>)
      ) : (
        <DefaultTextWrapper>
          <DefaultText>
            <AccentDefaultText>Sorry, no results were found </AccentDefaultText>
            for the product filters you selected. You may want to consider other
            search options to find the product you want. Our range is wide and
            you have the opportunity to find more options that suit your needs.
          </DefaultText>
          <DefaultText>
            <AccentDefaultText>
              Try changing the search parameters.
            </AccentDefaultText>
          </DefaultText>
        </DefaultTextWrapper>
      )}
    </ListContainer>
  );
};

export default ProdactsList;
