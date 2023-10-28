import { Formik } from 'formik';
import { addDays } from 'date-fns';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Calendar from '../../components/Calendar/Calendar';

import {
  Title,
  Text,
  StyledFormik,
  InputField,
  ButtonNext,
  Next,
  ContainerInside,
  WrapperDesktop,
  WrapperInput,
  MessageStyleError,
  MessageStyleSuccess,
} from './ParamsStepOne.styled';
import sprite from '../../images/sprite.svg';

import Statistics from '../../components/Statistics/Statistics.jsx';

function ParamsStepOne(props) {
  const handleSubmit = values => {
    const newData = { ...props.data, ...values };
    // console.log('StepOne данные:', newData);
    props.next(newData);
  };
  return (
    <>
      <WrapperDesktop></WrapperDesktop>

      <Title>Get closer to your goals!</Title>
      <Text>
        To ensure a personalized user experience and the proper functioning of
        our platform, we ask you to provide the following information about your
        weight, height and other relevant data:
      </Text>

      <Formik
        initialValues={{ ...props.data, isValid: false }}
        onSubmit={handleSubmit}
        autoComplete="off"
        validationSchema={stepOneValidationSchema}
        enableReinitialize={true}
      >
        {({ isValid, handleBlur, touched, errors }) => (
          <StyledFormik>
            <WrapperInput className="WrapperInput">
              <div>
                <div>
                  <InputField
                    className="InputField"
                    name="height"
                    placeholder="Height"
                    onBlur={handleBlur}
                  />
                </div>

                {touched.height && errors.height ? (
                  <MessageStyleError className="MessageStyleError">
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-error`} />
                    </svg>
                    {errors.height}
                  </MessageStyleError>
                ) : touched.height ? (
                  <MessageStyleSuccess className="MessageStyleSuccess">
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-success`} />
                    </svg>
                    Success Height
                  </MessageStyleSuccess>
                ) : null}
              </div>

              <div>
                <div>
                  <InputField
                    className="InputField"
                    name="currentWeight"
                    placeholder="Current Weight"
                    onBlur={handleBlur}
                  />
                </div>

                {touched.currentWeight && errors.currentWeight ? (
                  <MessageStyleError>
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-error`} />
                    </svg>
                    {errors.currentWeight}
                  </MessageStyleError>
                ) : touched.currentWeight ? (
                  <MessageStyleSuccess>
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-success`} />
                    </svg>
                    Success Current Weight
                  </MessageStyleSuccess>
                ) : null}
              </div>

              <div>
                <div>
                  <InputField
                    className="InputField"
                    name="desiredWeight"
                    placeholder="Desired Weight"
                    onBlur={handleBlur}
                  />
                </div>

                {touched.desiredWeight && errors.desiredWeight ? (
                  <MessageStyleError>
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-error`} />
                    </svg>
                    {errors.desiredWeight}
                  </MessageStyleError>
                ) : touched.desiredWeight ? (
                  <MessageStyleSuccess>
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-success`} />
                    </svg>
                    Success Desired Weight
                  </MessageStyleSuccess>
                ) : null}
              </div>

              <div>
                <InputField
                  className="InputField"
                  name="birthday"
                  placeholder="Birthday"
                  autoComplete="off"
                  onBlur={handleBlur}
                >
                  {({ field, form }) => (
                    <Calendar field={field} form={form} r />
                  )}
                </InputField>

                {touched.birthday && errors.birthday ? (
                  <MessageStyleError>
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-error`} />
                    </svg>
                    {errors.birthday}
                  </MessageStyleError>
                ) : touched.birthday ? (
                  <MessageStyleSuccess>
                    <svg width="16" height="16" fill="currentColor">
                      <use href={sprite + `#icon-checkbox-success`} />
                    </svg>
                    Success Birthday
                  </MessageStyleSuccess>
                ) : null}
              </div>
            </WrapperInput>
            <ButtonNext type="submit" disabled={!isValid}>
              Next
            </ButtonNext>
            <Next>
              <use xlinkHref={`${sprite}#icon-arrow`}></use>
            </Next>
          </StyledFormik>
        )}
      </Formik>
      <ContainerInside>
        <Statistics />
      </ContainerInside>
    </>
  );
}

const stepOneValidationSchema = Yup.object().shape({
  height: Yup.number()
    .required('Please enter your "Height"')
    .typeError('Desired Weight must be a number')
    .min(150, 'Height must be 150 or more'),
  currentWeight: Yup.number()
    .typeError('Current Weight must be a number')
    .required('Please enter your "Current Weight"'),
  desiredWeight: Yup.number()
    .typeError('Desired Weight must be a number')
    .required('Please enter your "Desired Weight"'),
  birthday: Yup.date()
    .max(addDays(new Date(), -18 * 365), 'Must be over 18 years old')
    .min(addDays(new Date(), -90 * 365), 'Must be under 90 years of age')
    .required('Please enter your Birthday'),
});

ParamsStepOne.propTypes = {
  data: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
};

export default ParamsStepOne;
