import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TimeLeft,
  TimePauseButton,
  TimeText,
  SpinnerWrap,
  Calories,
  CaloriesValue,
  CircleIcon,
  InactiveCircle,
  ActiveCircle,
} from './TimerBox.styled';
import sprite from '../../../images/sprite.svg';
const TimerBox = ({
  burnedCalories,
  time: fullTime,
  currentTime,
  setCurrentTime,
}) => {
  const timer = useRef(null);
  useEffect(
    () => () => {
      timer.current && clearInterval(timer.current);
    },
    [],
  );
  const toggleTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    } else {
      timer.current = setInterval(() => {
        setCurrentTime(prev => prev - 1);
      }, 1000);
    }
  };
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
  return (
    <SpinnerWrap>
      <TimeText>Time</TimeText>

      <CircleIcon viewBox="0 0 250 250">
        <InactiveCircle pathLength={fullTime * 60} cx={125} cy={125} r={125} />
        <ActiveCircle
          pathLength={fullTime * 60}
          cx={125}
          cy={125}
          r={125}
          strokeDasharray={fullTime * 60}
          strokeDashoffset={fullTime * 60 - currentTime}
        />
      </CircleIcon>
      <TimeLeft>{formattedTime}</TimeLeft>
      <TimePauseButton onClick={toggleTimer}>
        {timer.current ? (
          <svg width={32} height={32}>
            <use href={sprite + '#icon-stop'} />
          </svg>
        ) : (
          <svg width={32} height={32}>
            <use href={sprite + '#icon-play'} />
          </svg>
        )}
      </TimePauseButton>
      <Calories>
        Burned calories: <CaloriesValue>{burnedCalories}</CaloriesValue>
      </Calories>
    </SpinnerWrap>
  );
};
export default TimerBox;
TimerBox.propTypes = {
  burnedCalories: PropTypes.number,
  time: PropTypes.number,
  currentTime: PropTypes.number,
  setCurrentTime: PropTypes.func,
};
