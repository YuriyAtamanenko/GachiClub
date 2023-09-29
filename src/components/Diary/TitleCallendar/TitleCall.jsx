import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDiaryThunk } from '../../../redux/Diary/operations';
import sprite from '../../../images/sprite.svg';

import {
  BlockTitleCall,
  BlockCalendar,
  CustomDatePicker,
  BlockBtnDate,
  BtnLeft,
  BtnRight,
  Title,
  SvgIconCalendar,
  SvgIconLeft,
  SvgIconRight,
} from './TitleCall.styled';

const TitleCall = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const formatingDate = date =>
    `${String(date.getDate()).padStart(2, '0')}-${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}-${date.getFullYear()}`;

  useEffect(() => {
    dispatch(getDiaryThunk(formatingDate(startDate)));
  });

  const handleLeftButtonClick = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() - 1);
    setStartDate(newDate);
  };

  const handleRightButtonClick = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + 1);
    setStartDate(newDate);
  };

  return (
    <BlockTitleCall>
      <BlockCalendar>
        <CustomDatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
        />
        <SvgIconCalendar>
          <use xlinkHref={`${sprite}#icon-calendar`} />
        </SvgIconCalendar>
        <BlockBtnDate>
          <BtnLeft onClick={handleLeftButtonClick}>
            <SvgIconLeft>
              <use xlinkHref={`${sprite}#icon-left`} />
            </SvgIconLeft>
          </BtnLeft>
          <BtnRight onClick={handleRightButtonClick}>
            <SvgIconRight>
              <use xlinkHref={`${sprite}#icon-right`} />
            </SvgIconRight>
          </BtnRight>
        </BlockBtnDate>
      </BlockCalendar>
      <Title>Diary</Title>
    </BlockTitleCall>
  );
};

export default TitleCall;
