import { useDispatch } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import like from '../../../images/like-1x.png';
import {
  setModalToggle,
  toggleSuccess,
} from '../../../redux/Exercises/reducer';
import {
  Modal,
  Congratulation,
  StatName,
  StatItem,
  StatInfo,
  Button,
  StyledLink,
  LikeWraper,
  CloseButton,
} from './AddExerciseSuccess.styled';
const AddExerciseSuccess = () => {
  const dispatch = useDispatch();
  return (
    <Modal>
      <CloseButton
        onClick={() => {
          dispatch(setModalToggle());
          dispatch(toggleSuccess());
        }}
      >
        <svg stroke="#EFEDE8" width={26} height={26}>
          <use href={sprite + '#icon-close'} />
        </svg>
      </CloseButton>
      <LikeWraper>
        <img src={like} alt="like" />
      </LikeWraper>

      <Congratulation>Well done</Congratulation>
      <ul>
        <StatItem>
          <StatName>Your time:</StatName>
          <StatInfo>3 minutes</StatInfo>
        </StatItem>
        <StatItem>
          <StatName>Burned calories:</StatName>
          <StatInfo>150</StatInfo>
        </StatItem>
      </ul>
      <Button
        type="submit"
        onClick={() => {
          dispatch(toggleSuccess());
          dispatch(setModalToggle());
        }}
      >
        Next exercise
      </Button>
      <StyledLink
        onClick={() => {
          dispatch(setModalToggle());
          dispatch(toggleSuccess());
        }}
        to="/diary"
      >
        To the diary
        <svg
          width={16}
          height={16}
          style={{ stroke: 'rgba(239, 237, 232, 0.30)', verticalAlign: 'top' }}
        >
          <use href={sprite + '#icon-next'} />
        </svg>
      </StyledLink>
    </Modal>
  );
};
export default AddExerciseSuccess;
