import { Field, Formik } from 'formik';
import PropTypes, { any } from 'prop-types';
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
import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/Profile/selectors';

const UserForm = ({ handleSubmit, data, selectedAvatar }) => {
  //створюємо стан відкриття та закриття календаря
  const [openCalendar, setOpenCalendar] = useState(false);

  const { isLoadingUpdate } = useSelector(selectCurrentUser);

  //делегуємо для зручності
  const { name, email, bodyData } = data;

  //ще делегуємо для зручності
  const {
    height,
    birthday,
    blood,
    currentWeight,
    desiredWeight,
    levelActivity,
    sex,
  } = bodyData;

  //початковий стан полів
  const initialValues = {
    name,
    height,
    currentWeight,
    desiredWeight,
    blood: String(blood),
    sex,
    levelActivity: String(levelActivity),
    birthday: new Date(birthday),
    avatarUrl: selectedAvatar,
  };

  //записуємо данні чи змінився наш аватар (так як він поза нашою формою і форма його не контролює)
  const changeAvatar =
    initialValues.avatarUrl !== null &&
    typeof initialValues.avatarUrl !== 'string';

  const toglerCalendar = () => {
    setOpenCalendar(!openCalendar);
  };

  //ф-ція для короткого запису днів тижня
  const formatDate = date => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return days[date.getDay()];
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue, dirty }) => {
        const changeForm = changeAvatar || dirty;
        console.log('changeForm', changeForm);
        console.log('changeAvatar', changeAvatar);

        return (
          <StyledFormik>
            <TitleForm>Basic info</TitleForm>

            <label>
              <PrimalField type="text" name="name" />
            </label>

            <label>
              <PrimalField
                disabled={true}
                value={email}
                type="text"
                name="email"
              />
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
                  <use href={sprite + `#icon-calendar`}></use>
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
                <Field type="radio" name="sex" value="male" />
                <p>Male</p>

                <span></span>
              </RadioLabelStyled>

              <RadioLabelStyled>
                <Field type="radio" name="sex" value="female" />
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
                  Moderately active (moderate exercises/sports 3-5 days per
                  week)
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
                <Field type="radio" name="levelActivity" value="5"></Field>
                <span></span>
              </RadioLabelStyled>
            </ActivityContainer>
            <ButtonSubmit
              disabled={!changeForm}
              id="submitButton"
              type="submit"
            >
              {isLoadingUpdate ? 'Loading' : 'Save'}
            </ButtonSubmit>
          </StyledFormik>
        );
      }}
    </Formik>
  );
};

UserForm.propTypes = {
  selectedAvatar: any,
  data: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UserForm;
