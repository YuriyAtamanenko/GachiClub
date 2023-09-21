import React, { useState } from 'react';
import { Formik, Form } from 'formik';

// const ProfilePage = () => {

//   // return <div>ProfilePage</div>;
// };

const Step1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = e => {
    setFormData({ ...formData, field1: e.target.value });
  };

  return (
    <div>
      <h2>Step 1</h2>
      <input
        type="text"
        name="field1"
        value={formData.field1}
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
  const handleChange = e => {
    setFormData({ ...formData, field2: e.target.value });
  };

  return (
    <div>
      <h2>Step 2</h2>
      <input
        type="radio"
        name="field2"
        value={formData.field2}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

const Step3 = ({ formData, prevStep }) => {
  return (
    <div>
      <h2>Step 3</h2>
      <p>Data from Step 1: {formData.field1}</p>
      <p>Data from Step 2: {formData.field2}</p>
      <button onClick={prevStep}>Previous</button>
      <button type="submit">Submit</button>
    </div>
  );
};

const ProfilePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Отправьте данные на сервер или выполните другую логику здесь
    console.log('Form Data:', values);
    setSubmitting(false);
  };

  return (
    <div>
      <div className="progress-bar">
        <div className={`step ${step === 1 ? 'active' : ''}`}></div>
        <div className={`step ${step === 2 ? 'active' : ''}`}></div>
        <div className={`step ${step === 3 ? 'active' : ''}`}></div>
      </div>
      <Formik initialValues={formData} onSubmit={handleSubmit}>
        {({ isSubmitting, values }) => (
          <Form>
            {step === 1 && (
              <Step1
                formData={values}
                setFormData={setFormData}
                nextStep={nextStep}
              />
            )}
            {step === 2 && (
              <Step2
                formData={values}
                setFormData={setFormData}
                prevStep={prevStep}
                nextStep={nextStep}
              />
            )}
            {step === 3 && <Step3 formData={values} prevStep={prevStep} />}
          </Form>
        )}
      </Formik>
    </div>
  );
};

// export default MultiStepForm;

export default ProfilePage;
