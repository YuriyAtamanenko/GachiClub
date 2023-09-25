import React, { useState } from 'react';
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
