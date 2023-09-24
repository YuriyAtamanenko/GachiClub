import { Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  ActivityContainer,
  BloodContainer,
  ButtonSubmit,
  CalendarContainer,
  CalendarIco,
  CalendarStyled,
  ContainerField,
  LabelStyled,
  PrimalField,
  RadioLabelStyled,
  StyledFormik,
  TitleForm,
} from './UserForm.style';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import SvgSprite from '../../../images/sprite.svg';

const UserForm = ({ userParams: { name, email, bodyData } }) => {
  console.log('first', bodyData.birthday);
  const [openCalendar, setOpenCalendar] = useState(false);

  const {
    height,
    birthday,
    blood,
    currentWeight,
    desiredWeight,
    levelActivity,
    sex,
  } = bodyData;

  const initialValues = {
    name,
    email,
    height,
    currentWeight,
    desiredWeight,
    blood,
    sex,
    levelActivity,
    birthday: new Date(birthday),
  };

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
      {({ values, setFieldValue, dirty }) => (
        <StyledFormik>
          <TitleForm>Basic info</TitleForm>

          <label>
            <PrimalField type="text" name="name" />
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
                onChange={date => setFieldValue('birthday', date)}
                value={`${values.birthday.getDate()}.${
                  values.birthday.getMonth() + 1
                }.${values.birthday.getFullYear()}`}
                type="text"
                name="birthday"
              />
            </LabelStyled>
            <CalendarContainer
              data-isopen={`${openCalendar ? 'open' : 'close'}`}
            >
              <Field name="birthday">
                {() => (
                  <CalendarStyled
                    locale="en-US"
                    onChange={date => setFieldValue('birthday', date)}
                    value={values.birthday}
                    formatShortWeekday={(_, date) => formatDate(date)}
                    onClickDay={toglerCalendar}
                  />
                )}
              </Field>
            </CalendarContainer>
          </ContainerField>
          <TitleForm>Blood</TitleForm>
          <BloodContainer>
            <RadioLabelStyled>
              <Field type="radio" name="blood" value="1" /> <p>1</p>
              <span></span>
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
              <Field type="radio" name="sex" value="Male" />
              <p>Male</p>

              <span></span>
            </RadioLabelStyled>

            <RadioLabelStyled>
              <Field type="radio" name="sex" value="Female" />
              <p>Female</p>
              <span></span>
            </RadioLabelStyled>
          </BloodContainer>

          <ActivityContainer>
            <RadioLabelStyled>
              <p>Sedentary lifestyle (little or no physical activity)</p>
              <Field type="radio" name="levelActivity" value="1"></Field>
              <span></span>
            </RadioLabelStyled>
            <RadioLabelStyled>
              <p>Light activity (light exercises/sports 1-3 days per week)</p>
              <Field type="radio" name="levelActivity" value="2"></Field>
              <span></span>
            </RadioLabelStyled>
            <RadioLabelStyled>
              <p>
                Moderately active (moderate exercises/sports 3-5 days per week)
              </p>
              <Field type="radio" name="levelActivity" value="3"></Field>
              <span></span>
            </RadioLabelStyled>
            <RadioLabelStyled>
              <p>Very active (intense exercises/sports 6-7 days per week)</p>
              <Field type="radio" name="levelActivity" value="4"></Field>
              <span></span>
            </RadioLabelStyled>

            <RadioLabelStyled>
              <p>
                Extremely active (very strenuous exercises/sports and physical
                work)
              </p>
              <Field
                type="radio"
                name="levelActivity"
                value="Extremely"
              ></Field>
              <span></span>
            </RadioLabelStyled>
          </ActivityContainer>
          <ButtonSubmit disabled={!dirty} type="submit">
            Save
          </ButtonSubmit>
        </StyledFormik>
      )}
    </Formik>
  );
};

UserForm.propTypes = {
  userParams: PropTypes.object.isRequired,
};

export default UserForm;
