import styled from 'styled-components';
export const ListItem = styled.li`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  position: relative;
  padding: 18px 16px 16px 16px;
`;
export const Workout = styled.strong`
  border-radius: 4px;
  color: #fff;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 5px 7.5px 5px 7.5px;
  font-family: 'Roboto';
  fontsize: 12px;
  font-weight: 700;
  display: inline-flex;
  margin-bottom: 33px;
`;
export const TitleBlock = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
export const Title = styled.p`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 'calc(24px / 20px)';
`;
export const Statistics = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StatDef = styled.p`
  display: inherit;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 'calc(18px / 12px)';
  margin-right: 16px;
`;
export const Button = styled.button`
  background-color: transparent;
  color: #e6533c;
  border: none;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 'calc(18px / 14px)';
`;
export const Span = styled.span`
  color: #efede8;
  margin-left: 3px;
`;
