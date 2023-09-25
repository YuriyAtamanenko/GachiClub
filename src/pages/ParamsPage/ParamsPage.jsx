import { useState } from 'react';
import { useSelector } from 'react-redux';
import ParamsStepOne from './ParamsStepOnePage';
import ParamsStepTwo from './ParamsStepTwoPage';
import ParamsStepThree from './ParamsStepThreePage';

import {
  ProgressBarStep1,
  ProgressBarStep2,
  ProgressBarStep3,
} from './ProgressBar';

const progressBarStyles = {
  display: 'flex',
  marginTop: '20px',
};

const ParamsPage = () => {
  //  const token = useSelector(state => state.auth.token);

  // console.log('Текущий user', user);
  // console.log('Текущий token', token);

  const [data, setData] = useState({
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
    blood: '',
    sex: '',
    levelActivity: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    console.log('данные которые улетают на сервер:', formData);
  };

  const handleNextStep = (newData, final = false) => {
    const updatedData = { ...data, ...newData };
    setData(updatedData);

    if (final) {
      makeRequest(updatedData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    const updatedData = { ...data, ...newData };
    setData(updatedData);

    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <ParamsStepOne key="step1" next={handleNextStep} data={data} />,

    <ParamsStepTwo
      key="step2"
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,

    <ParamsStepThree
      key="step3"
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
  ];

  // console.log('data', data);

  return (
    <div>
      <div>{steps[currentStep]}</div>

      <div style={progressBarStyles}>
        <ProgressBarStep1 currentStep={currentStep} />
        <ProgressBarStep2 currentStep={currentStep} />
        <ProgressBarStep3 currentStep={currentStep} />
      </div>
    </div>
  );
};

export default ParamsPage;
