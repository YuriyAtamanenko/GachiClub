import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  WrapperDesktop,
  WrapperForm,
  Title,
  Text,
  WrapperText,
  StyledField,
  StyledForm,
  ButtonSubmit,
} from './SignUpPage.styled';

import { register } from '../../redux/Authorization/operations';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bodyData = useSelector(state => state.auth.bodyData);

  const handleSubmit = async (values, action) => {
    console.log(values);

    try {
      const response = await dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      );

      if (response.error) {
        toast.error('Email already exists. Please use a different email');
      } else {
        action.resetForm();
        if (
          bodyData.bodyData === null ||
          Object.keys(bodyData.bodyData).length === 0
        ) {
          navigate('/params');
        } else {
          navigate('/diary');
        }
      }
    } catch (error) {
      console.error('Server error:', error);
      toast.error('Server Error: Something went wrong');
    }
  };

  const signUpSchema = object({
    name: string().required(),
    email: string()
      .matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Invalid E-mail format')
      .required('Please input your E-mail!'),
    password: string()
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,
        'Password must contain at least 6 letters and 1 number',
      )

      .required('Please input your password'),
  });

  //початкове значення инпутів
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Container>
      <WrapperDesktop></WrapperDesktop>
      <WrapperForm>
        <WrapperText>
          <Title>Sign Up</Title>

          <Text>
            Thank you for your interest in our platform. To complete the
            registration process, please provide us with the following
            information.
          </Text>
        </WrapperText>

        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <StyledForm autoComplete="off">
                <div>
                  <StyledField type="text" name="name" placeholder="Name" />
                  {errors.name && touched.name && (
                    <div className="error-message">Please input your name!</div>
                  )}
                </div>

                <div>
                  <StyledField type="email" name="email" placeholder="Email" />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div>
                  <StyledField
                    type="password"
                    name="password"
                    placeholder="Password"
                  />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                    // style={{ color: 'red', fontSize: '14px' }}
                  />
                </div>

                <ButtonSubmit type="submit">Sign Up</ButtonSubmit>

                <p>
                  Already have account? <Link to="/signin">Sign In</Link>
                </p>
              </StyledForm>
            )}
          </Formik>
        </div>
      </WrapperForm>
    </Container>
  );
};

export default SignUpPage;
