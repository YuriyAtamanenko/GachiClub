import { useDispatch, useSelector } from 'react-redux';
import {
  getCategory,
  getTitle,
  getToggle,
} from '../../redux/Exercises/selectors';
import TitlePage from './TitlePage';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList';
import ExercisesCategories from './ExercisesCategories';
import ExercisesList from './ExercisesList';
import {
  changeCategory,
  changeTitle,
  toggleChoice,
} from '../../redux/Exercises/reducer';
import { useEffect } from 'react';
import { Container, Button } from './ExercisesPage.styled';
const ExercisesPage = () => {
  const isSelected = useSelector(getToggle);
  const category = useSelector(getCategory);
  const title = useSelector(getTitle);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCategory('Body parts'));
  }, []);
  return (
    <Container>
      {isSelected && (
        <Button
          onClick={() => {
            dispatch(toggleChoice());
            dispatch(changeTitle('Exercises'));
          }}
        >
          Back
        </Button>
      )}
      <TitlePage title={title} />
      <ExercisesCategories />
      {!isSelected ? (
        <ExercisesSubcategoriesList page={category} />
      ) : (
        <ExercisesList />
      )}
    </Container>
  );
};

export default ExercisesPage;
