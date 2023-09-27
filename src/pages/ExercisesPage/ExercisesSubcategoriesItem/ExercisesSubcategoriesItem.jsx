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
import { getExercisesList } from '../../../redux/Exercises/operations';
const ExercisesSubcategoriesItem = ({ imgURL, name, filter, id }) => {
  const dispatch = useDispatch();
  const filterQuery = (filteredItem, name) => {
    dispatch(changeTitle(name));
    dispatch(toggleChoice());
    if (filteredItem === 'Body parts') {
      dispatch(
        getExercisesList({
          bodyPartTitle: name,
          equipmentTitle: '',
          targetTitle: '',
        }),
      );
    } else if (filteredItem === 'Muscles') {
      dispatch(
        getExercisesList({
          bodyPartTitle: '',
          equipmentTitle: '',
          targetTitle: name,
        }),
      );
    } else if (filteredItem === 'Equipment') {
      dispatch(
        getExercisesList({
          bodyPartTitle: '',
          equipmentTitle: name,
          targetTitle: '',
        }),
      );
    }
  };
  return (
    <Card onClick={() => filterQuery(filter, name)}>
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
