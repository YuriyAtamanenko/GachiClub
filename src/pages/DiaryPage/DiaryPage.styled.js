import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import './react-datepicker.css';

export const Container = styled.div`
  padding: 52px 64px 68px 64px;
`;

export const SubContainer = styled.div`
  display: flex;
`;

export const BlockCalendar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SubContainerPE = styled.div``;
export const SubContainerStats = styled.div``;

export const CustomDatePicker = styled(DatePicker)`
  width: 138px;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.333%;

  background-color: transparent;
  border: none;
  color: var(--primary-text-color);
`;

export const BtnLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  background-color: transparent;
  border: none;
`;
export const BtnRight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 137.5%;

  color: var(--primary-text-color);

  margin-bottom: 32px;
`;

// *****Products Conrainer*****

export const ProductsContainer = styled.div`
  display: flex;
  width: 826px;
  height: 234px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  margin-bottom: 32px;
  margin-right: 32px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
`;

// *****Exercises Conrainer*****

export const ExercisesContainer = styled.div`
  display: flex;
  width: 826px;
  height: 234px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
`;

// *****Label and Button*****

export const BlockTxtBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 625px;
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
  display: flex;
  width: 112px;
  padding: 0;
  gap: 8px;
  align-items: center;

  background-color: transparent;
  border: none;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: var(--bright-accent-color);
`;

export const ExercisesBtn = styled.button`
  display: flex;
  width: 117px;
  padding: 0;
  gap: 8px;
  align-items: center;

  background-color: transparent;
  border: none;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: var(--bright-accent-color);
`;

// *****Sector Total*****

export const ListStats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-content: flex-start;
`;

export const ItemStats = styled.li`
  display: flex;
  width: 187px;
  height: 116px;
  padding: 18px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
`;
export const TextContent = styled.p`
  display: flex;
  aligne-item: center;

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: rgba(239, 237, 232, 0.4);
`;
export const TotalContent = styled.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.333%;

  color: var(--primary-text-color);
`;

export const BlockWarning = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const TextWarning = styled.p`
  width: 358px;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  color: var(--secondary-text-color);
`;
