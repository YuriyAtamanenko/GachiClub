// const ParamsPage = () => {
//   return <div>ParamsPage</div>;
// };

// export default ParamsPage;

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import PropTypes from 'prop-types';
// import * as Yup from 'yup';
import { updateUser } from '../../Redux/Authorization/operations';
import { useDispatch } from 'react-redux';

import {
  ProgressBarStep1,
  ProgressBarStep2,
  ProgressBarStep3,
} from './ProgressBar';

const progressBarStyles = {
  display: 'flex',
  marginTop: '20px',
};

const StepOne = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <div>
      <div>
        <h2>Get closer to your goals!</h2>
        <p>
          To ensure a personalized user experience and the proper functioning of
          our platform, we ask you to provide the following information about
          your weight, height and other relevant data:
        </p>
      </div>
      <Formik initialValues={props.data} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field name="height" placeholder="Height" />
            <Field name="currentWeight" placeholder="Current Weight" />
            <Field name="desiredWeight" placeholder="Desired Weight" />
            <Field name="birthday" placeholder="Birthday" />

            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const StepTwo = props => {
  //   const bloodChenge = event => {
  //     props.next({ ...props.data, bloodType: event.target.name });
  //   };
  const handleSubmit = values => {
    // Создайте новый объект, объединяя значения из props.data и values
    const newData = { ...props.data, ...values };

    // Вызовите функцию next, передав newData
    props.next(newData);
  };
  return (
    <div>
      <div>
        <h2>Get closer to your goals!</h2>
        <p>
          To ensure a personalized user experience and the proper functioning of
          our platform, we ask you to provide the following information about
          your weight, height and other relevant data:
        </p>
      </div>

      <Formik initialValues={props.data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div>
              <p>Blood</p>

              <label>
                <Field type="radio" name="blood" value="1" />1
              </label>

              <label>
                <Field type="radio" name="blood" value="2" />2
              </label>

              <label>
                <Field type="radio" name="blood" value="3" />3
              </label>

              <label>
                <Field type="radio" name="blood" value="4" />4
              </label>
            </div>

            <div>
              <p>Sex</p>
              <label>
                <Field type="radio" name="sex" value="Male" />
                Male
              </label>

              <label>
                <Field type="radio" name="sex" value="Female" />
                Female
              </label>
            </div>

            <div>
              <p>Level Activity</p>

              <label>
                <Field
                  type="radio"
                  name="levelActivity"
                  value="Sedentary lifestyle (little or no physical activity)"
                />
                Sedentary lifestyle (little or no physical activity)
              </label>

              <label>
                <Field
                  type="radio"
                  name="levelActivity"
                  value="Light activity (light exercises/sports 1-3 days per week)"
                />
                Light activity (light exercises/sports 1-3 days per week)
              </label>

              <label>
                <Field
                  type="radio"
                  name="levelActivity"
                  value="Moderately active (moderate exercises/sports 3-5 days per week)"
                />
                Moderately active (moderate exercises/sports 3-5 days per week)
              </label>

              <label>
                <Field
                  type="radio"
                  name="levelActivity"
                  value="Very active (intense exercises/sports 6-7 days per week)"
                />
                Very active (intense exercises/sports 6-7 days per week)
              </label>

              <label>
                <Field
                  type="radio"
                  name="levelActivity"
                  value="Extremely active (very strenuous exercises/sports and physical
                work)"
                />
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
            </div>

            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const StepThree = props => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    try {
      // Отправьте данные пользователя на сервер при сабмите формы
      await dispatch(
        updateUser({
          email: props.data.email,
          name: props.data.name,
          password: props.data.password,
          height: props.data.height,
          currentWeight: props.data.currentWeight,
          desiredWeight: props.data.desiredWeight,
          birthday: '2005-06-17T07:27:41.902Z',
          blood: props.data.blood,
          sex: props.data.sex,
          levelActivity: props.data.levelActivity,
        }),
      );
      // Вызовите функцию next, чтобы перейти к следующему шагу
      props.next(values, true);
    } catch (e) {
      console.error('Error updating user:', e);
    }
  };

  // const handleSubmit = values => {
  //   props.next(values, true);
  // };

  // dispatch(
  //   updateUser({
  //     email: props.data.email, // Используйте email, чтобы идентифицировать пользователя
  //     name: props.data.name, // Передайте другие необходимые поля
  //     password: props.data.password,

  //     height: props.data.height,
  //     currentWeight: props.data.currentWeight,
  //     desiredWeight: props.data.desiredWeight,
  //     birthday: '2005-06-17T07:27:41.902Z',
  //     blood: props.data.blood,
  //     sex: props.data.sex,
  //     levelActivity: props.data.levelActivity,
  //   }),
  // );

  return (
    <div>
      <div>
        <h2>Dear user</h2>
        <p>
          Thank you for filling in all the required data. We greatly appreciate
          your cooperation and commitment to a healthy lifestyle. The collected
          information will allow us to provide you with a more individual and
          personalized approach.
        </p>
      </div>
      <Formik initialValues={props.data} onSubmit={handleSubmit}>
        {({ values }) => (
          <div>
            <button type="submit">Go</button>
            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

const ParamsPage = () => {
  const [data, setData] = useState({
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
    blood: '1',
    sex: 'Male',
    levelActivity: 'Sedentary lifestyle (little or no physical activity)',
  });

  const [currentStep, setCurrentStep] = useState(0);

  //   const totalSteps = 3;

  const makeRequest = formData => {
    console.log(formData);
  };

  //   const handleSubmit = values => {
  //     // Вызывается при отправке формы
  //     setData(prev => ({ ...prev, ...values }));
  //     if (currentStep === 2) {
  //       // Если текущий шаг - последний шаг, отправьте данные на сервер
  //       makeRequest(values);
  //     } else {
  //       // В противном случае перейдите к следующему шагу
  //       setCurrentStep(prev => prev + 1);
  //     }
  //   };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne key="step1" next={handleNextStep} data={data} />,

    <StepTwo
      key="step2"
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,

    <StepThree
      key="step3"
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
  ];

  console.log('data', data);

  return (
    <div>
      <div>{steps[currentStep]}</div>

      <div style={progressBarStyles}>
        {/* Отображение всех трех прогресс-баров */}
        <ProgressBarStep1 currentStep={currentStep} />
        <ProgressBarStep2 currentStep={currentStep} />
        <ProgressBarStep3 currentStep={currentStep} />
      </div>
    </div>
  );
};

StepOne.propTypes = {
  data: PropTypes.object.isRequired, // Валидация для пропса 'data'
  next: PropTypes.func.isRequired, // Валидация для пропса 'next'
};

StepTwo.propTypes = {
  data: PropTypes.object.isRequired, // Валидация для пропса 'data'
  next: PropTypes.func.isRequired, // Валидация для пропса 'next'
  prev: PropTypes.func.isRequired,
};

StepThree.propTypes = {
  data: PropTypes.object.isRequired, // Валидация для пропса 'data'
  next: PropTypes.func.isRequired, // Валидация для пропса 'next'
  prev: PropTypes.func.isRequired,
};

export default ParamsPage;
