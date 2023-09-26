import { useDispatch, useSelector } from 'react-redux';
import {
  getCategory,
  getTitle,
  getToggle,
} from '../../../redux/Exercises/selectors';
import TitlePage from '../TitlePage/TitlePage';
import sprite from '../../../images/sprite.svg';
import ExercisesSubcategoriesList from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesCategories from '../ExercisesCategories/ExercisesCategories';
import ExercisesList from '../ExercisesList/ExercisesList';
import { changeTitle, toggleChoice } from '../../../redux/Exercises/reducer';
import { Container, Button, TitlesWraper } from './ExercisesPage.styled';
const ExercisesPage = () => {
  const isSelected = useSelector(getToggle);
  const category = useSelector(getCategory);
  const title = useSelector(getTitle);
  const dispatch = useDispatch();
  return (
    <Container>
      {isSelected && (
        <Button
          onClick={() => {
            dispatch(toggleChoice());
            dispatch(changeTitle('Exercises'));
          }}
        >
          <svg
            width={16}
            height={16}
            style={{ stroke: 'rgba(239, 237, 232, 0.4)' }}
          >
            <use href={sprite + '#icon-back'} />
          </svg>
          Back
        </Button>
      )}
      <TitlesWraper>
        <TitlePage title={title} />
        <ExercisesCategories />
      </TitlesWraper>
      {!isSelected ? (
        <ExercisesSubcategoriesList page={category} />
      ) : (
        <ExercisesList />
      )}
    </Container>
  );
};

export default ExercisesPage;
