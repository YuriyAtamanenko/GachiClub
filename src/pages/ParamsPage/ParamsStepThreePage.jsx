import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { updateUser } from '../../redux/Authorization/operations';

const ParamsStepThree = props => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async values => {
    // console.log('StepThree данные:', props.data);
    try {
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

      navigate('/diary');

      props.next(values, true);
    } catch (e) {
      console.error('Error updating user:', e);
    }
  };

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
            {/* <button type="submit">Go</button> */}
            <button type="button" onClick={() => handleSubmit(values)}>
              {/* <button type="button" onClick={() => props.next(values, true)}></button> */}
              Go
            </button>
            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

ParamsStepThree.propTypes = {
  data: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};

export default ParamsStepThree;
