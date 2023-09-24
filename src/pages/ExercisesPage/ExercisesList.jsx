import ExercisesListItem from './ExercisesListItem';
import { useSelector } from 'react-redux';
import { getIndex } from '../../redux/Exercises/selectors';
import exercises from './exercises.json';
import { List } from './styledComponents/ExercisesList.styled';
import BasicModalWindow from './BasicModalWindow';
import AddExerciseForm from './AddExerciseForm';
const ExercisesList = () => {
  const exerciseIndex = useSelector(getIndex);
  const findedItem = exercises[exerciseIndex];
  return (
    <div>
      <List>
        {exercises.map(({ bodyPart, name, target, burnedCalories }, index) => {
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
        })}
      </List>
      {findedItem && (
        <BasicModalWindow>
          <AddExerciseForm data={findedItem} />
        </BasicModalWindow>
      )}
    </div>
  );
};
export default ExercisesList;
