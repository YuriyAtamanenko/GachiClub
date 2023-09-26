import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const ParamsStepTwo = props => {
  const handleSubmit = values => {
    const newData = { ...props.data, ...values };
    // console.log('StepTwo данные:', newData);

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

      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={stepTwoValidationSchema}
      >
        {({ values }) => (
          <Form>
            <div>
              <p>Blood</p>

              <label>
                <Field type="radio" name="blood" value="1" />1
                <ErrorMessage name="blood" component="div" className="error" />
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
              <ErrorMessage name="blood" component="div" className="error" />
            </div>

            <div>
              <p>Sex</p>
              <label>
                <Field type="radio" name="sex" value="male" />
                Male
              </label>

              <label>
                <Field type="radio" name="sex" value="female" />
                Female
              </label>
              <ErrorMessage name="sex" component="div" className="error" />
            </div>

            <div>
              <p>Level Activity</p>

              <label>
                <Field type="radio" name="levelActivity" value="1" />
                <ErrorMessage
                  name="levelActivity"
                  component="div"
                  className="error"
                />
                Sedentary lifestyle (little or no physical activity)
              </label>

              <label>
                <Field type="radio" name="levelActivity" value="2" />
                Light activity (light exercises/sports 1-3 days per week)
              </label>

              <label>
                <Field type="radio" name="levelActivity" value="3" />
                Moderately active (moderate exercises/sports 3-5 days per week)
              </label>

              <label>
                <Field type="radio" name="levelActivity" value="4" />
                Very active (intense exercises/sports 6-7 days per week)
              </label>

              <label>
                <Field type="radio" name="levelActivity" value="5" />
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
              <ErrorMessage
                name="levelActivity"
                component="div"
                className="error"
              />
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

const stepTwoValidationSchema = Yup.object().shape({
  blood: Yup.string().required('Please select a blood type'),
  sex: Yup.string().required('Please select a sex'),
  levelActivity: Yup.string().required('Please select a level of activity'),
});

ParamsStepTwo.propTypes = {
  data: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};

export default ParamsStepTwo;
