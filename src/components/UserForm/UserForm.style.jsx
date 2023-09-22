import { Field } from 'formik';
import Calendar from 'react-calendar';
import styled from 'styled-components';

export const PrimalField = styled(Field)`
  width: 100%;
  padding: 14px;
  background-color: transparent;
  font-size: 14px;
  border-radius: 12px;
  border: 1px solid var(--secondary-text-color);
  color: var(--primary-text-color);
  margin-bottom: 8px;

  &[name='email'] {
    color: rgba(239, 237, 232, 0.6);
  }
  &[name='calendarField'] {
    z-index: -1;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    &[name='email'] {
      width: calc(50% - 7px);
    }
    &[name='userName'] {
      width: calc(50% - 7px);
      margin-right: 14px;
    }
  }
`;

export const LabelStyled = styled.label`
  width: calc(50% - 7px);
  position: relative;

  @media screen and (min-width: 768px) {
    width: calc(100% / 4 - 10.5px);
  }
`;

export const TitleForm = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;

  &[id='calendar'] {
    color: transparent;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }
`;

export const ContainerField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin-bottom: 12px;
`;

export const CalendarStyled = styled(Calendar)`
  &.react-calendar {
    width: 215px;
    border-radius: 8px;
    background: #ef8964;
    padding: 13px;
    z-index: 1;
  }

  .react-calendar__navigation {
    height: auto;
    padding-bottom: 14px;
    margin: 0;
    border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-calendar__navigation button {
    min-width: 0;
  }

  .react-calendar__navigation__label__labelText--from {
    color: #efede8;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  .react-calendar__navigation__label {
    padding: 0;
    height: max-content;
  }
  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__tile {
    color: #efede8;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
    padding: 5px 0 5px 0;
    position: relative;
  }

  .react-calendar__tile > abbr {
    position: relative;
    z-index: 3;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(239, 237, 232, 0.2);
  }

  .react-calendar__navigation__next-button {
    height: fit-content;
  }
  .react-calendar__navigation__prev-button {
    height: fit-content;
  }

  .react-calendar__navigation__arrow {
    color: white;
  }

  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays {
    text-transform: none;
    color: rgba(239, 237, 232, 0.5);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }

  .react-calendar__tile--active::before {
    content: '';
    position: absolute;
    z-index: 2;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .react-calendar__tile--now {
    background-color: transparent;
  }

  .react-calendar__tile--active {
    background-color: transparent;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: transparent;
  }
`;

export const CalendarContainer = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  height: ${props => (props['data-isopen'] === 'close' ? '0px' : '260px')};
  overflow: hidden;
  transition: height 0.5s ease;
`;

export const CalendarIco = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translate(0, -15%);
`;

export const BloodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;

  :has(> [value='4']) {
    margin-right: 10px; /* Змініть значення margin-right на те, яке вам потрібно */
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 32px;

    label:not(:first-child) {
      margin-left: 8px;
    }
    label:nth-child(4) {
      margin-right: 32px;
    }
  }
`;

export const RadioLabelStyled = styled.label`
  display: block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
  font-size: 17px;
  user-select: none;

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 2px solid #636366;
    border-radius: 50%;
  }

  input {
    position: absolute;
    opacity: 0;
    сursor: pointer;
  }

  input:checked ~ span {
    border-color: #ef8964;
  }

  input:checked ~ span:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #ef8964;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    color: #efede8;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
  }

  &:has([name='activity']) span {
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const ActivityContainer = styled.div`
  margin-bottom: 40px;
  label {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
  }
`;

export const ButtonSubmit = styled.button`
  padding: 14px 40px 14px 40px;
  border-radius: 12px;
  background: var(--orange, #e6533c);
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: white;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 66px;

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
  }
  &:hover {
    background-color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
  }
`;
