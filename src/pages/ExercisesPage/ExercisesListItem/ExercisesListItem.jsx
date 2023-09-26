import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import sprite from '../../../images/sprite.svg';
import { setIndex, setModalToggle } from '../../../redux/Exercises/reducer';
import {
  ListItem,
  Workout,
  TitleBlock,
  Title,
  Statistics,
  StatDef,
  Button,
  Span,
  IconWraper,
} from './ExercisesListItem.styled';

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
        <IconWraper>
          <svg
            width="24"
            height="24"
            style={{
              fill: '#EFEDE8',
              zIndex: 10,
            }}
          >
            <use href={sprite + '#icon-running'} />
          </svg>
        </IconWraper>

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
          dispatch(setModalToggle());
        }}
      >
        Start
        <svg
          width={16}
          height={16}
          style={{ verticalAlign: 'top', stroke: '#E6533C' }}
        >
          <use href={sprite + '#icon-next'} />
        </svg>
      </Button>
    </ListItem>
  );
};
export default ExercisesListItem;
ExercisesListItem.propTypes = {
  name: PropTypes.string,
  burnedCalories: PropTypes.number,
  bodyPart: PropTypes.string,
  target: PropTypes.string,
  index: PropTypes.number,
};
