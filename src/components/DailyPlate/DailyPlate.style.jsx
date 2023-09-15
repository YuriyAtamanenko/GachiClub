import styled from 'styled-components';

export const Plate = styled.div`
  width: calc(50% - 7px);
  max-width: 214px;
  height: 96px;
  padding: 14px 18px;
  background-color: var(--bright-accent-color);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`;

export const DailyText = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
