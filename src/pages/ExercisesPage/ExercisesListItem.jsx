import { useDispatch } from 'react-redux';
import { setIndex } from '../../redux/reducer';
import {
  ListItem,
  Workout,
  TitleBlock,
  Title,
  Statistics,
  StatDef,
  Button,
  Span,
} from './styledComponents/ExercisesListItem.styled';

const ExercisesListItem = ({
  name,
  burnedCalories,
  bodyPart,
  target,
  index,
}) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Workout>WORKOUT</Workout>
      <TitleBlock>
        <svg
          width={24}
          height={24}
          style={{ marginRight: 16 }}
          viewBox="0 0 24 24"
        >
          <use href="./src/pages/ExercisesPage/symbol-defs.svg#icon" />
        </svg>
        <Title>{name}</Title>
      </TitleBlock>
      <Statistics>
        <StatDef>
          Burned calories: <Span>{burnedCalories}</Span>
        </StatDef>
        <StatDef>
          Body part: <Span>{bodyPart}</Span>
        </StatDef>
        <StatDef>
          Target: <Span>{target}</Span>
        </StatDef>
      </Statistics>
      <Button
        type="button"
        onClick={() => {
          dispatch(setIndex(index));
        }}
      >
        Start
      </Button>
    </ListItem>
  );
};
export default ExercisesListItem;
