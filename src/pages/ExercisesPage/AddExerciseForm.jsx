import {
  AnimatedImage,
  PictureWrap,
  TimeText,
  TimeSpinner,
  SpinnerWrap,
  TimeLeft,
  TimePauseButton,
  Calories,
  CaloriesValue,
  StaticsList,
  StatisticsItem,
  StatisticSubtitle,
  AddButton,
  StatisticInfo,
} from './styledComponents/AddExerciseForm.styled';
const AddExerciseForm = ({ data }) => {
  const { bodyPart, burnedCalories, equipment, gifUrl, name, target, time } =
    data;
  return (
    <div>
      <PictureWrap>
        <AnimatedImage src={gifUrl} alt={name} />
      </PictureWrap>
      <SpinnerWrap>
        <TimeText>Time</TimeText>
        <TimeSpinner>
          <TimeLeft>02:10</TimeLeft>
        </TimeSpinner>
        <TimePauseButton>| |</TimePauseButton>
      </SpinnerWrap>
      <Calories>
        Burned calories: <CaloriesValue>{burnedCalories}</CaloriesValue>
      </Calories>

      <StaticsList>
        <StatisticsItem>
          <StatisticSubtitle>Name</StatisticSubtitle>
          <StatisticInfo>{name}</StatisticInfo>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticSubtitle>Target</StatisticSubtitle>
          <StatisticInfo>{target}</StatisticInfo>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticSubtitle>Body part</StatisticSubtitle>
          <StatisticInfo>{bodyPart}</StatisticInfo>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticSubtitle>Equipment</StatisticSubtitle>
          <StatisticInfo>{equipment}</StatisticInfo>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticSubtitle>Time</StatisticSubtitle>
          <StatisticInfo>{time} minutes</StatisticInfo>
        </StatisticsItem>
      </StaticsList>
      <AddButton type="submit">Add to diary</AddButton>
    </div>
  );
};
export default AddExerciseForm;
