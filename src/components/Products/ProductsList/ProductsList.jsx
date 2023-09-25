import { useSelector } from 'react-redux';
import {
  ListContainer,
  DefaultTextWrapper,
  DefaultText,
  AccentDefaultText,
} from './ProductsList.styled';
import ProductsItem from './../ProductsItem/ProductsItem';
import { selectProducts } from '../../../redux/Products/selectors';

// const items = [
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5773',
//     },
//     weight: 100,
//     calories: 340,
//     category: 'dairy',
//     title: 'Danbo cheese',
//     groupBloodNotAllowed: {
//       1: true,
//       2: true,
//       3: false,
//       4: false,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5b7f',
//     },
//     weight: 100,
//     calories: 112,
//     category: 'fish',
//     title: 'marlin',
//     groupBloodNotAllowed: {
//       1: false,
//       2: false,
//       3: false,
//       4: false,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5e13',
//     },
//     weight: 100,
//     calories: 17,
//     category: 'vegetables and herbs',
//     title: 'Salads Belaya Dacha Delicate root',
//     groupBloodNotAllowed: {
//       1: false,
//       2: false,
//       3: false,
//       4: false,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5b6f',
//     },
//     weight: 100,
//     calories: 160,
//     category: 'fish',
//     title: 'Cold smoked bream',
//     groupBloodNotAllowed: {
//       1: false,
//       2: false,
//       3: false,
//       4: false,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5b8d',
//     },
//     weight: 100,
//     calories: 281,
//     category: 'fish',
//     title: 'Pollock in batter',
//     groupBloodNotAllowed: {
//       1: false,
//       2: false,
//       3: false,
//       4: false,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff590d',
//     },
//     weight: 100,
//     calories: 232,
//     category: 'meat',
//     title: 'Lamb ham',
//     groupBloodNotAllowed: {
//       1: false,
//       2: true,
//       3: false,
//       4: true,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5f16',
//     },
//     weight: 100,
//     calories: 38,
//     category: 'soft drinks',
//     title: 'Pepsi',
//     groupBloodNotAllowed: {
//       1: false,
//       2: false,
//       3: false,
//       4: false,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694802b2373622ff56c1',
//     },
//     weight: 100,
//     calories: 432,
//     category: 'flour',
//     title: 'Cedar flour',
//     groupBloodNotAllowed: {
//       1: true,
//       2: false,
//       3: false,
//       4: false,
//     },
//   },

//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5d34',
//     },
//     weight: 100,
//     calories: 298,
//     category: 'vegetables and herbs',
//     title: 'dried potatoes',
//     groupBloodNotAllowed: {
//       1: false,
//       2: false,
//       3: false,
//       4: false,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5911',
//     },
//     weight: 100,
//     calories: 209,
//     category: 'meat',
//     title: 'Mutton',
//     groupBloodNotAllowed: {
//       1: false,
//       2: true,
//       3: false,
//       4: true,
//     },
//   },
//   {
//     _id: {
//       $oid: '5d51694902b2373622ff5a68',
//     },
//     weight: 100,
//     calories: 55,
//     category: 'berries',
//     title: 'chokeberry',
//     groupBloodNotAllowed: {
//       1: false,
//       2: false,
//       3: false,
//       4: false,
//     },
//   },
// ];

const ProdactsList = () => {
  const items = useSelector(selectProducts);
  console.log(items);

  return (
    <ListContainer>
      {items.length > 0 ? (
        items
          .slice(0, 10)
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
