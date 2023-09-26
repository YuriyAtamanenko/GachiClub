import styled from 'styled-components';

export const ProductsContainer = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 335px;

    min-height: 335px;
    max-height: 824px;

    overflow-y: auto;

    padding: 13px;
    align-items: flex-start;

    margin-bottom: 40px;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: rgba(239, 237, 232, 0.05);
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
    margin-bottom: 32px;
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
export const ProductsBtn = styled.button`
  @media screen and (min-width: 375px) {
    display: flex;
    width: 101px;
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
    width: 112px;

    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }
`;
export const BlockProdLabel768 = styled.div`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const TitleProdLabel768 = styled.p`
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

    &.title-prod-0 {
      left: 13px;
    }
    &.title-prod-1 {
      left: 225px;
    }
    &.title-prod-2 {
      left: 361px;
    }
    &.title-prod-3 {
      left: 459px;
    }
    &.title-prod-4 {
      left: 557px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-prod-0 {
      left: 32px;
    }
    &.title-prod-1 {
      left: 252px;
    }
    &.title-prod-2 {
      left: 426px;
    }
    &.title-prod-3 {
      left: 539px;
    }
    &.title-prod-4 {
      left: 652px;
    }
  }
`;
export const BlockNotFoundProd = styled.p`
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
    left: 344px;

    font-size: 16px;
    line-height: 150%;
  }
`;
export const ContainerProductInput = styled.div`
  @media screen and (min-width: 1440px) {
  }
`;
export const BlockProductInput = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    justify-content: center;
    margin-left: 16px;
  }
`;
export const LabelProduct = styled.label`
  @media screen and (min-width: 375px) {
    display: block;
    margin-bottom: 8px;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    &.label-prod-0,
    &.label-prod-1,
    &.label-prod-2,
    &.label-prod-3,
    &.label-prod-4 {
      display: none;
    }
  }
`;
export const InputProduct = styled.input`
  @media screen and (min-width: 375px) {
    display: flex;
    height: 38px;
    padding: 10px 14px;

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

    &.input-prod-0 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-prod-1 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-prod-2 {
      width: 81px;
      margin-right: 16px;
    }

    &.input-prod-3 {
      width: 80px;
      margin-right: 16px;
    }

    &.input-prod-4 {
      width: 76px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    padding: 8px 14px;

    font-size: 16px;
    line-height: 150%;

    &.input-prod-0 {
      width: 204px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-prod-1 {
      width: 128px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-prod-2 {
      width: 90px;
      margin-right: 8px;
    }

    &.input-prod-3 {
      width: 90px;
      margin-right: 8px;
    }

    &.input-prod-4 {
      width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.input-prod-0 {
      width: 212px;
    }

    &.input-prod-1 {
      width: 166px;
    }

    &.input-prod-2 {
      width: 105px;
    }

    &.input-prod-3 {
      width: 105px;
    }

    &.input-prod-4 {
      width: 110px;
    }
  }
`;
export const ButtonDelProd = styled.button`
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

  @media screen and (min-width: 768px) {
    right: -42px;
  }
`;
export const SvgIconDel = styled.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;
