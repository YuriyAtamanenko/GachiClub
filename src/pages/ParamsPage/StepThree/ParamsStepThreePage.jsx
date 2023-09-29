import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { updateUser } from '../../../redux/Authorization/operations';
import {
  BtnBack,
  BtnContainer,
  BtnGo,
  Container,
  StatisticsBox,
  Svg,
  Text,
  Title,
  Wrapper,
  WrapperDesktop,
} from './ParamsStepThreePage.styled';
import sprite from '../../../images/sprite.svg';
import Elements from '../../../components/Statistics/Elements';

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
        })
      );

      navigate('/diary');

      props.next(values, true);
    } catch (e) {
      console.error('Error updating user:', e);
    }
  };

  return (
    <>
      <WrapperDesktop></WrapperDesktop>
      <Wrapper>
        <Container>
          <Title>Dear user</Title>
          <Text>
            Thank you for filling in all the required data. We greatly appreciate your cooperation
            and commitment to a healthy lifestyle. The collected information will allow us to
            provide you with a more individual and personalized approach.
          </Text>
        </Container>
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
          {({ values }) => (
            <BtnContainer>
              {/* <button type="submit">Go</button> */}
              <BtnGo type="button" onClick={() => handleSubmit(values)}>
                {/* <button type="button" onClick={() => props.next(values, true)}></button> */}
                Go
              </BtnGo>
              <BtnBack type="button" onClick={() => props.prev(values)}>
                <Svg>
                  <use href={sprite + `#icon-back`}></use>
                </Svg>
                Back
              </BtnBack>
            </BtnContainer>
          )}
        </Formik>
      </Wrapper>
      <StatisticsBox>
        <Elements />
      </StatisticsBox>
    </>
  );
};

ParamsStepThree.propTypes = {
  data: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};

export default ParamsStepThree;
