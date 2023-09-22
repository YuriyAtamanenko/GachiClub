import { useDispatch } from 'react-redux';
import { changeTitle, toggleChoice } from '../../redux/reducer';
import {
  Card,
  CardContent,
  CardPicture,
  CategoryBlock,
  Subscription,
  Category,
} from './styledComponents/ExercisesSubcategoriesItem.styled';
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
