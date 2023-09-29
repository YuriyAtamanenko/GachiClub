import ExercisesListItem from '../ExercisesListItem/ExercisesListItem';
import { useSelector } from 'react-redux';
import { getAllExercises, getIndex } from '../../../redux/Exercises/selectors';
import { List, Container, BackgroundImage } from './ExercisesList.styled';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
const ExercisesList = () => {
  const exerciseIndex = useSelector(getIndex);
  const allExercises = useSelector(getAllExercises);
  const findedItem = allExercises.find(({ _id }) => _id === exerciseIndex);
  return (
    <Container>
      <List>
        {allExercises.map(
          ({ bodyPart, name, target, burnedCalories, _id }, index) => {
            return (
              <ExercisesListItem
                key={index}
                name={name.charAt(0).toUpperCase() + name.slice(1)}
                burnedCalories={burnedCalories}
                bodyPart={bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
                target={target.charAt(0).toUpperCase() + target.slice(1)}
                id={_id}
              />
            );
          },
        )}
      </List>
      <BackgroundImage />

      {findedItem && <BasicModalWindow data={findedItem} />}
    </Container>
  );
};
export default ExercisesList;
