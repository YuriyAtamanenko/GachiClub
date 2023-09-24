import {
  ListContainer,
  Item,
  DefaultTextWrapper,
  DefaultText,
  AccentDefaultText,
} from './ProductsList.styled';
// import ProductsItem from './../ProductsItem/ProductsItem';

const items = [];

const ProdactsList = () => {
  return (
    <ListContainer>
      {/* Тестовий рендер масиву, видалити після отримання інфо з Backend */}
      {items.length > 0 ? (
        items.map(({ _id, title, category }) => (
          <Item key={_id.$oid}>
            {title}
            <br />
            {category}
          </Item>
        ))
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

      {/* Розкоментувати після отримання інфо з Backend */}

      {/* {items.length > 0 ? (
        items.map(item => (
          <ProductsItem key={item._id.$oid} info={item}></ProductsItem>
        ))
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
      )} */}
    </ListContainer>
  );
};

export default ProdactsList;
