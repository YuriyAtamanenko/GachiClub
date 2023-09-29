import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExercisesContainer = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 335px;

    overflow-y: auto;

    min-height: 335px;
    max-height: 824px;

    padding: 13px;
    align-items: flex-start;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: rgba(239, 237, 232, 0.05);
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    padding: 16px;
  }
`;
export const BlockTxtBtn = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    /* gap: 145px; */
    /* margin-bottom: 48px; */

    &.block-ex {
      gap: 131px;
    }
  }

  @media screen and (min-width: 768px) {
    /* gap: 503px; */
    /* margin-bottom: 42px; */

    &.block-ex {
      gap: 495px;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    /* gap: 624px;
    margin-bottom: 42px; */

    &.block-ex {
      gap: 608px;
    }
  }
`;
export const ProductsExercisesText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`;
export const ExercisesBtn = styled(Link).attrs({
  className: 'add-exercises-link',
})`
  @media screen and (min-width: 375px) {
    display: flex;
    width: 105px;
    padding: 0;
    gap: 8px;
    align-items: center;

    background-color: transparent;
    border: none;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 128.571%;
    color: var(--bright-accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 117px;

    font-size: 16px;
    line-height: 150%;
  }
`;
export const ContainerExecrcises = styled.div`
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`;
export const BlockExeLabel768 = styled.div`
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }
`;
export const TitleExeLabel768 = styled.p`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.title-exe-0 {
      top: 56px;
      left: 16px;
    }
    &.title-exe-1 {
      top: 56px;
      left: 114px;
    }
    &.title-exe-2 {
      top: 56px;
      left: 254px;
    }
    &.title-exe-3 {
      top: 56px;
      left: 390px;
    }
    &.title-exe-4 {
      width: 78px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      top: 56px;
      left: 482px;
    }
    &.title-exe-5 {
      top: 56px;
      left: 568px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-exe-0 {
      top: 56px;
      left: 32px;
    }
    &.title-exe-1 {
      top: 56px;
      left: 155px;
    }
    &.title-exe-2 {
      top: 56px;
      left: 320px;
    }
    &.title-exe-3 {
      top: 56px;
      left: 459px;
    }
    &.title-exe-4 {
      overflow: inherit;
      top: 56px;
      left: 573px;
    }
    &.title-exe-5 {
      top: 56px;
      left: 672px;
    }
  }
`;
export const BlockNotFoundExe = styled.p`
  @media screen and (min-width: 375px) {
    position: absolute;
    top: 159px;
    left: 107px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    top: 105px;
    left: 282px;
  }

  @media screen and (min-width: 1440px) {
    top: 105px;
    left: 342px;

    font-size: 16px;
    line-height: 150%;
  }
`;
export const ButtonDelExe = styled.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    background-color: transparent;
    border: none;
  }
`;
export const SvgIconDel = styled.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;

// *****************************************

export const ListExercise = styled.ul`
  @media screen and (min-width: 375px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 768px) {
    /* margin-top: 42px; */
  }
`;

export const ItemExercise = styled.li`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 66px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const ContentExercises = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);

    &.bodyPart {
      width: 297px;
      margin-bottom: 42px;
    }
    &.equipment {
      width: 297px;
      margin-bottom: 42px;
    }
    &.name {
      width: 297px;
      margin-bottom: 42px;
    }
    &.target {
      width: 81px;
      margin-right: 16px;
    }
    &.calories {
      width: 80px;
      margin-right: 16px;
    }
    &.duration {
      width: 76px;
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    &.bodyPart {
      width: 90px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.equipment {
      width: 132px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.name {
      width: 128px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    &.target {
      width: 84px;
      margin-right: 8px;
    }
    &.calories {
      width: 78px;
      margin-right: 8px;
    }
    &.duration {
      width: 72px;
      margin-right: 12px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.bodyPart {
      width: 115px;
    }
    &.equipment {
      width: 157px;
    }
    &.name {
      width: 131px;
    }
    &.target {
      width: 106px;
    }
    &.calories {
      width: 91px;
    }
    &.duration {
      width: 82px;
      margin-right: 20px;
    }
  }
`;

export const LabelExercises = styled.label`
  @media screen and (min-width: 375px) {
    position: absolute;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.labBodyPart {
      top: -23px;
      left: 0;
    }
    &.labEquipment {
      top: -23px;
      left: 0;
    }
    &.labName {
      top: -23px;
      left: 0;
    }
    &.labTarget {
      top: -23px;
      left: 0;
    }
    &.labCalori {
      width: 80px;
      top: -23px;
      left: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.labDuration {
      top: -23px;
      left: 0;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TitleExercises = styled.p`
  @media screen and (min-width: 375px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 768px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 1440px) {
  }
`;
