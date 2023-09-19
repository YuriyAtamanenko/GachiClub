import { Field, Form, Formik } from 'formik';
import {
  ActivityContainer,
  BloodContainer,
  CalendarContainer,
  CalendarIco,
  CalendarStyled,
  ContainerField,
  LabelStyled,
  PrimalField,
  RadioLabelStyled,
  TitleForm,
} from './UserForm.style';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import SvgSprite from '../../images/sprite.svg';

const initialValues = {
  userName: 'UserName',
  email: 'example@mail',
  height: '111',
  currentWeight: 90,
  desiredWeight: 60,
  blood: '1',
  gender: 'Male',
  activity: 'Sedentary',
  calendar: null,
};

const UserForm = () => {
  const [date, setDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleSubmit = e => {
    console.log('e', e);
    setOpenCalendar(false);
  };

  const toglerCalendar = () => {
    setOpenCalendar(!openCalendar);
  };

  const formatDate = date => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return days[date.getDay()];
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <TitleForm>Basic info</TitleForm>

        <label>
          <PrimalField type="text" name="userName" />
        </label>

        <label>
          <PrimalField disabled={true} type="text" name="email" />
        </label>
        <ContainerField>
          <LabelStyled>
            <TitleForm>Height</TitleForm>
            <PrimalField type="text" name="height" />
          </LabelStyled>

          <LabelStyled>
            <TitleForm>Current Weight</TitleForm>
            <PrimalField type="text" name="currentWeight" />
          </LabelStyled>

          <LabelStyled>
            <TitleForm>Desired Weight</TitleForm>
            <PrimalField type="text" name="desiredWeight" />
          </LabelStyled>

          <LabelStyled onClick={toglerCalendar}>
            <TitleForm id="calendarTitle">Calendar</TitleForm>
            <CalendarIco>
              <use xlinkHref={`${SvgSprite}#icon-calendar`} />
            </CalendarIco>
            <PrimalField
              disabled={true}
              selected={date}
              value={`${date.getDate()}.${
                date.getMonth() + 1
              }.${date.getFullYear()}`}
              type="text"
              name="calendarField"
            />
          </LabelStyled>

          <CalendarContainer data-isopen={`${openCalendar ? 'open' : 'close'}`}>
            <CalendarStyled
              id="calendar"
              locale="en-US"
              onChange={setDate}
              onClickDay={toglerCalendar}
              value={date}
              formatShortWeekday={(_, date) => formatDate(date)}
            />
          </CalendarContainer>
        </ContainerField>
        <TitleForm>Blood</TitleForm>
        <BloodContainer>
          <RadioLabelStyled>
            <Field type="radio" name="blood" value="1" /> <p>1</p> <span></span>
          </RadioLabelStyled>
          <RadioLabelStyled>
            <Field type="radio" name="blood" value="2" />
            <p>2</p>
            <span></span>
          </RadioLabelStyled>
          <RadioLabelStyled>
            <Field type="radio" name="blood" value="3" />
            <p>3</p>
            <span></span>
          </RadioLabelStyled>

          <RadioLabelStyled>
            <Field type="radio" name="blood" value="4" />
            <p>4</p>
            <span></span>
          </RadioLabelStyled>

          <RadioLabelStyled>
            <Field type="radio" name="gender" value="Male" />
            <p>Male</p>

            <span></span>
          </RadioLabelStyled>

          <RadioLabelStyled>
            <Field type="radio" name="gender" value="Female" />
            <p>Female</p>
            <span></span>
          </RadioLabelStyled>
        </BloodContainer>

        <ActivityContainer>
          <RadioLabelStyled>
            <p>Sedentary lifestyle (little or no physical activity)</p>
            <Field type="radio" name="activity" value="Sedentary"></Field>
            <span></span>
          </RadioLabelStyled>
          <RadioLabelStyled>
            <p>Light activity (light exercises/sports 1-3 days per week)</p>
            <Field type="radio" name="activity" value="Light"></Field>
            <span></span>
          </RadioLabelStyled>
          <RadioLabelStyled>
            <p>
              Moderately active (moderate exercises/sports 3-5 days per week)
            </p>
            <Field type="radio" name="activity" value="Moderately"></Field>
            <span></span>
          </RadioLabelStyled>
          <RadioLabelStyled>
            <p>Very active (intense exercises/sports 6-7 days per week)</p>
            <Field type="radio" name="activity" value="Very"></Field>
            <span></span>
          </RadioLabelStyled>

          <RadioLabelStyled>
            <p>
              Extremely active (very strenuous exercises/sports and physical
              work)
            </p>
            <Field type="radio" name="activity" value="Extremely"></Field>
            <span></span>
          </RadioLabelStyled>
        </ActivityContainer>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
