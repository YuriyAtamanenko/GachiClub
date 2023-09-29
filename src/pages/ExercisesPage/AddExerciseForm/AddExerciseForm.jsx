import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AnimatedImage,
  PictureWrap,
  StaticsList,
  StatisticsItem,
  StatisticSubtitle,
  AddButton,
  StatisticInfo,
  Modal,
  StatisticsWraper,
  CloseButton,
} from './AddExerciseForm.styled';
import { addExerciseToDiary } from '../../../redux/Exercises/operations';
import sprite from '../../../images/sprite.svg';
import {
  setModalToggle,
  toggleSuccess,
} from '../../../redux/Exercises/reducer';
import TimerBox from '../TimerBox/TimerBox';
import { useState } from 'react';
const AddExerciseForm = ({ data }) => {
  const [currentTime, setCurrentTime] = useState(180);
  const dispatch = useDispatch();
  const {
    bodyPart,
    burnedCalories,
    equipment,
    gifUrl,
    name,
    target,
    time,
    _id,
  } = data;
  const calories = Math.floor((currentTime / 60) * (burnedCalories / time));
  console.log(currentTime);
  const addExerciseToDairy = () => {
    if (currentTime === 180) {
      console.log('Nothing to add');
      return;
    }
    const time = Math.round(180 - currentTime);
    dispatch(
      addExerciseToDiary({
        exerciseId: _id,
        duration: time,
        calories,
      }),
    )
      .then(() => dispatch(toggleSuccess()))
      .catch(err => console.log(err.message));
  };
  return (
    <Modal>
      <CloseButton onClick={() => dispatch(setModalToggle())}>
        <svg stroke="#EFEDE8" width={26} height={26}>
          <use href={sprite + '#icon-close'} />
        </svg>
      </CloseButton>
      <div>
        <PictureWrap>
          <AnimatedImage src={gifUrl} alt={name} />
        </PictureWrap>
        <TimerBox
          burnedCalories={calories}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          time={time}
        />
      </div>

      <StatisticsWraper>
        <StaticsList>
          <StatisticsItem>
            <StatisticSubtitle>Name</StatisticSubtitle>
            <StatisticInfo>
              {name.toString().charAt(0).toUpperCase() +
                name.toString().slice(1)}
            </StatisticInfo>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticSubtitle>Target</StatisticSubtitle>
            <StatisticInfo>
              {target.toString().charAt(0).toUpperCase() +
                target.toString().slice(1)}
            </StatisticInfo>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticSubtitle>Body part</StatisticSubtitle>
            <StatisticInfo>
              {bodyPart.toString().charAt(0).toUpperCase() +
                bodyPart.toString().slice(1)}
            </StatisticInfo>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticSubtitle>Equipment</StatisticSubtitle>
            <StatisticInfo>
              {equipment.toString().charAt(0).toUpperCase() +
                equipment.toString().slice(1)}
            </StatisticInfo>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticSubtitle>Time</StatisticSubtitle>
            <StatisticInfo>{time} minutes</StatisticInfo>
          </StatisticsItem>
        </StaticsList>
        <AddButton type="submit" onClick={addExerciseToDairy}>
          Add to diary
        </AddButton>
      </StatisticsWraper>
    </Modal>
  );
};
export default AddExerciseForm;
AddExerciseForm.propTypes = {
  data: PropTypes.object,
};
