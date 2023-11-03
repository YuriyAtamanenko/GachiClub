import sprite from '../../images/sprite.svg';
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
} from './Statistics.styled';

export const Elements = () => {
  return (
    <>
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
      <CaloriesBox className="calories-box">
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
    </>
  );
};

export default Elements;
