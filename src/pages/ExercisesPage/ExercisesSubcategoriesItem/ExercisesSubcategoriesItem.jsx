import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTitle, toggleChoice } from '../../../redux/Exercises/reducer';
import {
  Card,
  CardContent,
  CardPicture,
  CategoryBlock,
  Subscription,
  Category,
} from './ExercisesSubcategoriesItem.styled';
const ExercisesSubcategoriesItem = ({ imgURL, name, filter }) => {
  const dispatch = useDispatch();
  return (
    <Card
      onClick={() => {
        dispatch(changeTitle(name));
        dispatch(toggleChoice());
      }}
    >
      <CardContent>
        <CardPicture src={imgURL} alt={name} />
        <CategoryBlock>
          <Subscription>{name}</Subscription>
          <Category>{filter}</Category>
        </CategoryBlock>
      </CardContent>
    </Card>
  );
};
export default ExercisesSubcategoriesItem;
ExercisesSubcategoriesItem.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.string,
};
