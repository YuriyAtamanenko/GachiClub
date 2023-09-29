import sprite from '../../../images/sprite.svg';
// import sprite from '../../images/sprite.svg';
import {
  CaloriesContent,
  CaloriesBack,
  CaloriesBox,
  CaloriesText,
  CaloriesTutorialText,
  RunIcon,
  VideoBack,
  VideoBox,
  VideoText,
  VideoIcon,
  VideoTutorialText,
  StatisticsBox,
} from './StatisticsSignIn.styled';
// ./Statistics.styled'

export const Statistics = () => {
  return (
    <StatisticsBox>
      <VideoBox>
        <VideoBack>
          <VideoIcon>
            <use href={sprite + `#icon-play`}></use>
          </VideoIcon>
        </VideoBack>
        <div>
          <VideoText>350+</VideoText>
          <VideoTutorialText>Video tutorial</VideoTutorialText>
        </div>
      </VideoBox>
      <CaloriesBox>
        <CaloriesBack>
          <RunIcon>
            <use href={sprite + `#icon-run`}></use>
          </RunIcon>
        </CaloriesBack>
        <CaloriesContent>
          <CaloriesText>500</CaloriesText>
          <CaloriesTutorialText>cal</CaloriesTutorialText>
        </CaloriesContent>
      </CaloriesBox>
    </StatisticsBox>
  );
};

export default Statistics;
