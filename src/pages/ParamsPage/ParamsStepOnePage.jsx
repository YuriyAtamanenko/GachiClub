// import React from 'react';

import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import {
  Title,
  Text,
  Label,
  StyledFormik,
  InputField,
  ButtonNext,
  Container,
  Next,
} from './ParamsStepOne.styled.js';
import sprite from '../../images/sprite.svg';

import Statistics from '../../components/Statistics/Statistics.jsx';

function ParamsStepOne(props) {
  //   const [isFormValid, setIsFormValid] = useState(false);

  const CustomDatePicker = forwardRef(({ field, form }, ref) => {
    const [startDate, setStartDate] = useState(new Date());
    const datepickerRef = useRef(null);

    // Обработчик изменения даты
    const handleDateChange = date => {
      setStartDate(date);
      form.setFieldValue(field.name, date); // значение в Formik
    };

    useImperativeHandle(ref, () => ({
      // для закрытия календаря
      closeDatePicker: () => {
        if (datepickerRef.current) {
          datepickerRef.current.setOpen(false);
        }
      },
    }));

    return (
      <DatePicker
        showIcon
        // showPopperArrow={true}
        // showYearDropdown
        selected={startDate}
        onChange={handleDateChange}
        customInput={<input {...field} />}
        ref={datepickerRef}
      />
    );
  });

  CustomDatePicker.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  };

  const handleSubmit = values => {
    const newData = { ...props.data, ...values };
    // console.log('StepOne данные:', newData);
    props.next(newData);
  };
  return (
    <Container>
      <div>
        <Title>Get closer to your goals!</Title>
        <Text>
          To ensure a personalized user experience and the proper functioning of
          our platform, we ask you to provide the following information about
          your weight, height and other relevant data:
        </Text>
        <Label>Height</Label>
      </div>
      <Formik
        initialValues={{ ...props.data, isValid: false }}
        onSubmit={handleSubmit}
        autoComplete="off"
        validationSchema={stepOneValidationSchema}
        enableReinitialize={true}
        // validateOnChange={false} // Disable automatic form validation on change
        // validateOnBlur={false} // Disable automatic form validation on blur
        // validate={values => {
        //   stepOneValidationSchema.isValid(values).then(isValid => {
        //     setIsFormValid(isValid); // Update the state to reflect form validity
        //   });
        // }}
      >
        {/* {({ isValid }) => ( */}
        {({ isValid }) => (
          <StyledFormik>
            <div>
              <InputField name="height" placeholder="Height" />
              <ErrorMessage name="height" component="div" className="error" />

              <InputField name="currentWeight" placeholder="Current Weight" />
              <ErrorMessage
                name="currentWeight"
                component="div"
                className="error"
              />
            </div>
            <div>
              <InputField name="desiredWeight" placeholder="Desired Weight" />
              <ErrorMessage
                name="desiredWeight"
                component="div"
                className="error"
              />

              <InputField
                name="birthday"
                placeholder="Birthday"
                autoComplete="off"
              >
                {({ field, form }) => (
                  <CustomDatePicker field={field} form={form} />
                )}
              </InputField>
              <ErrorMessage name="birthday" component="div" className="error" />
            </div>
            <ButtonNext type="submit" disabled={!isValid}>
              Next
            </ButtonNext>
            <Next>
              <use xlinkHref={`${sprite}#icon-next`}></use>
            </Next>
          </StyledFormik>
        )}
      </Formik>
    </Container>
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
  birthday: Yup.date().required('Please enter your "Birthday"'),
});

ParamsStepOne.propTypes = {
  data: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
};

export default ParamsStepOne;
