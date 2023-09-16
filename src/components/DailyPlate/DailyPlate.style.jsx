import styled from 'styled-components';

export const Plate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 214px;
  height: 96px;
  padding: 13px;
  background-color: var(--bright-accent-color);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  &:last-child {
    flex-grow: 1;
  }
`;

export const Ico = styled.img`
  margin-right: 8px;
`;
export const DailyText = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;

export const Warning = styled.p``;
