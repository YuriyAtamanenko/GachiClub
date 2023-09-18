import { Field, Form, Formik } from 'formik';
import {
  CalendarContainer,
  CalendarIco,
  CalendarStyled,
  ContainerField,
  LabelStyled,
  PrimalField,
  TitleForm,
} from './UserForm.style';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import SvgSprite from '../../images/sprite.svg';

const initialValue = {
  userName: 'UserName',
  email: 'example@mail',
  height: '111',
  currentWeight: 90,
  desiredWeight: 60,
  blood: '1',
  gender: 'Male',
  activity: 'Sedentary',
};

const UserForm = () => {
  const [date, setDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleSubmit = e => {
    console.log('e', e);
    setOpenCalendar(false);
  };

  const toglerCalendar = e => {
    console.log('e.target', e.target);
    setOpenCalendar(!openCalendar);
  };

  const formatDate = date => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return days[date.getDay()];
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
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
            <TitleForm id="calendar">Calendar</TitleForm>
            <CalendarIco>
              <use xlinkHref={`${SvgSprite}#icon-calendar`} />
            </CalendarIco>
            <PrimalField
              disabled={true}
              value={`${date.getDate()}.${
                date.getMonth() + 1
              }.${date.getFullYear()}`}
              type="text"
              name="calendar"
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

        <div>
          <label>
            <p>1</p>
            <Field type="radio" name="blood" value="1"></Field>
          </label>
          <label>
            <p>2</p>
            <Field type="radio" name="blood" value="2"></Field>
          </label>
          <label>
            <p>3</p>
            <Field type="radio" name="blood" value="3"></Field>
          </label>

          <label>
            <p>4</p>
            <Field type="radio" name="blood" value="4"></Field>
          </label>
        </div>
        <div>
          <label>
            <p>Male</p>
            <Field type="radio" name="gender" value="Male"></Field>
          </label>

          <label>
            <p>Famele</p>
            <Field type="radio" name="gender" value="Female"></Field>
          </label>
        </div>

        <div>
          <label>
            <p>Sedentary lifestyle (little or no physical activity)</p>
            <Field type="radio" name="activity" value="Sedentary"></Field>
          </label>
          <label>
            <p>Light activity (light exercises/sports 1-3 days per week)</p>
            <Field type="radio" name="activity" value="Light"></Field>
          </label>
          <label>
            <p>
              Moderately active (moderate exercises/sports 3-5 days per week)
            </p>
            <Field type="radio" name="activity" value="Moderately"></Field>
          </label>
          <label>
            <p>Very active (intense exercises/sports 6-7 days per week)</p>
            <Field type="radio" name="activity" value="Very"></Field>
          </label>

          <label>
            <p>
              Extremely active (very strenuous exercises/sports and physical
              work)
            </p>
            <Field type="radio" name="activity" value="Extremely"></Field>
          </label>
        </div>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
