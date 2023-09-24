import styled from '@emotion/styled';

export const ListContainer = styled.ul`
  display: flex;

  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    align-content: flex-start;
    height: 487px;
    column-gap: 16px;
    row-gap: 32px;
    overflow-y: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`;

export const DefaultTextWrapper = styled.div`
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 104px;
  }
`;

export const DefaultText = styled.p`
  color: var(--secondary-text-color);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 580px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AccentDefaultText = styled.span`
  color: var(--bright-accent-color);
`;
