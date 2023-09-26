import ExercisesListItem from '../ExercisesListItem/ExercisesListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllExercises,
  getIndex,
  getIsSuccess,
} from '../../../redux/Exercises/selectors';
import { List, Container, BackgroundImage } from './ExercisesList.styled';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';
import AddExerciseSuccess from '../AddExerciseSuccess/AddExerciseSuccess';
import { useEffect } from 'react';
import { getExercisesList } from '../../../redux/Exercises/operations';
const ExercisesList = () => {
  const dispatch = useDispatch();
  const isSuccess = useSelector(getIsSuccess);
  const exerciseIndex = useSelector(getIndex);
  const allExercises = useSelector(getAllExercises);
  const findedItem = allExercises[exerciseIndex];
  useEffect(() => {
    dispatch(getExercisesList());
  }, [dispatch]);
  return (
    <Container>
      <List>
        {allExercises.map(
          ({ bodyPart, name, target, burnedCalories }, index) => {
            return (
              <ExercisesListItem
                key={index}
                name={name.charAt(0).toUpperCase() + name.slice(1)}
                burnedCalories={burnedCalories}
                bodyPart={bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
                target={target.charAt(0).toUpperCase() + target.slice(1)}
                index={index}
              />
            );
          },
        )}
      </List>
      <BackgroundImage />
      {findedItem && (
        <BasicModalWindow>
          {!isSuccess ? (
            <AddExerciseForm data={findedItem} />
          ) : (
            <AddExerciseSuccess />
          )}
        </BasicModalWindow>
      )}
    </Container>
  );
};
export default ExercisesList;
