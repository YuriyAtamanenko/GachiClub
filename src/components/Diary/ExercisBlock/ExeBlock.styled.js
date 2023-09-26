import styled from 'styled-components';

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
    gap: 145px;
    margin-bottom: 48px;

    &.block-ex {
      gap: 131px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 503px;
    margin-bottom: 42px;

    &.block-ex {
      gap: 495px;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    gap: 624px;
    margin-bottom: 42px;

    &.block-ex {
      gap: 615px;
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
export const ExercisesBtn = styled.button`
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
export const BlockExeLabel768 = styled.div`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const TitleExeLabel768 = styled.p`
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 56px;
    left: 0;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.title-exe-0 {
      left: 13px;
    }
    &.title-exe-1 {
      left: 111px;
    }
    &.title-exe-2 {
      left: 251px;
    }
    &.title-exe-3 {
      left: 388px;
    }
    &.title-exe-4 {
      width: 78px;
      white-space: nowrap;
      /* overflow: hidden; */
      text-overflow: ellipsis;
      left: 479px;
    }
    &.title-exe-5 {
      left: 565px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-exe-0 {
      left: 32px;
    }
    &.title-exe-1 {
      left: 155px;
    }
    &.title-exe-2 {
      left: 320px;
    }
    &.title-exe-3 {
      left: 459px;
    }
    &.title-exe-4 {
      width: 85px;
      left: 573px;
    }
    &.title-exe-5 {
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
export const ContainerExecrcisesInput = styled.div`
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`;
export const BlockExecrcisesInput = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;
export const LabelExecrcises = styled.label`
  @media screen and (min-width: 375px) {
    display: block;
    margin-bottom: 8px;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.label-exe-4 {
      width: 80px;
      white-space: nowrap;
      /* overflow: hidden; */
      text-overflow: ellipsis;
    }
  }

  @media screen and (min-width: 768px) {
    &.label-exe-0,
    &.label-exe-1,
    &.label-exe-2,
    &.label-exe-3,
    &.label-exe-4,
    &.label-exe-5 {
      display: none;
    }
  }
`;
export const InputExecrcises = styled.input`
  @media screen and (min-width: 375px) {
    display: flex;
    padding: 10px 14px;
    height: 38px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--primary-text-color);

    background-color: transparent;
    border-radius: 12px;
    border: 1px solid var(--secondary-text-color);

    &:focus {
      outline: none;
    }

    &.input-exe-0 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-1 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-2 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-3 {
      width: 81px;
      margin-right: 16px;
    }

    &.input-exe-4 {
      width: 80px;
      margin-right: 16px;
    }

    &.input-exe-5 {
      width: 76px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    padding: 8px 14px;

    font-size: 16px;
    line-height: 150%;

    &.input-exe-0 {
      width: 90px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-1 {
      width: 132px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-2 {
      width: 128px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-3 {
      width: 84px;
      margin-right: 8px;
    }

    &.input-exe-4 {
      width: 78px;
      margin-right: 8px;
    }

    &.input-exe-5 {
      width: 72px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.input-exe-0 {
      width: 115px;
    }

    &.input-exe-1 {
      width: 157px;
    }

    &.input-exe-2 {
      width: 131px;
    }

    &.input-exe-3 {
      width: 106px;
    }

    &.input-exe-4 {
      width: 91px;
    }

    &.input-exe-5 {
      width: 82px;
    }
  }
`;
export const ButtonDelExe = styled.button`
  @media screen and (min-width: 375px) {
    position: absolute;
    right: 0;
    bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    right: -35px;
    bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    right: -45px;
  }
`;
export const SvgIconDel = styled.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;
