import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Formik,
  // useFormik
} from 'formik';
// import { object, string } from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StatisticsSignUp from './StatisticsSignUp/StatisticsSignUp';
import sprite from '../../images/sprite.svg';
import ButtonInput from '../../components/ButtonInput/ButtonInput';
import * as Yup from 'yup';

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
  WrapperInput,
  ReLink,
  LinkStyle,
  MessageStyleError,
  MessageStyleSuccess,
  PasswordField,
  WrapperPassword,
  // WrapperMessange,
} from './SignUpPage.styled';

import { register } from '../../redux/Authorization/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpPage = () => {
  const [isPassword, setIsPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('password');

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

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required('Please input your name!'),
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Invalid E-mail format')
      .required('Please input your E-mail!'),
    password: Yup.string()
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,
        'Password must contain at least 6 letters and 1 number',
      )
      .required('Please input your password'),
  });

  const toglePassword = () => {
    setIsPassword(prevstate => {
      return !prevstate;
    });
    setPasswordInput(prevstate => {
      if (prevstate === 'password') {
        return 'text';
      }
      if (prevstate === 'text') {
        return 'password';
      }
    });
  };

  return (
    <Container>
      <WrapperDesktop></WrapperDesktop>
      <WrapperForm>
        <WrapperText>
          <Title className="title">Sign Up</Title>

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
            {({ handleBlur, touched, errors }) => (
              <StyledForm autoComplete="off">
                <WrapperInput>
                  <div>
                    <div>
                      <StyledField
                        type="text"
                        name="name"
                        placeholder="Name"
                        onBlur={handleBlur}
                      />
                    </div>

                    {touched.name && errors.name ? (
                      <MessageStyleError>
                        <svg width="16" height="16" fill="currentColor">
                          <use href={sprite + `#icon-checkbox-error`} />
                        </svg>
                        {errors.name}
                      </MessageStyleError>
                    ) : touched.name ? (
                      <MessageStyleSuccess>
                        <svg width="16" height="16" fill="currentColor">
                          <use href={sprite + `#icon-checkbox-success`} />
                        </svg>
                        Success name
                      </MessageStyleSuccess>
                    ) : null}
                  </div>

                  <div>
                    <div>
                      <StyledField
                        type="email"
                        name="email"
                        placeholder="Email"
                        onBlur={handleBlur}
                      />
                    </div>

                    {touched.email && errors.email ? (
                      <MessageStyleError>
                        <svg width="16" height="16" fill="currentColor">
                          <use href={sprite + `#icon-checkbox-error`} />
                        </svg>
                        {errors.email}
                      </MessageStyleError>
                    ) : touched.email ? (
                      <MessageStyleSuccess>
                        <svg width="16" height="16" fill="currentColor">
                          <use href={sprite + `#icon-checkbox-success`} />
                        </svg>
                        Success email
                      </MessageStyleSuccess>
                    ) : null}
                  </div>

                  <div>
                    <WrapperPassword>
                      <PasswordField
                        id="password"
                        type={passwordInput}
                        placeholder="Password"
                        name="password"
                        onBlur={handleBlur}
                      />

                      <ButtonInput
                        type="button"
                        right="16px"
                        onClick={toglePassword}
                      >
                        <svg width="20" height="20">
                          <use
                            href={
                              sprite +
                              `${isPassword ? `#icon-eye-off` : `#icon-eye`}`
                            }
                          ></use>
                        </svg>
                      </ButtonInput>
                    </WrapperPassword>

                    {touched.password && errors.password ? (
                      <MessageStyleError>
                        <svg width="16" height="16" fill="currentColor">
                          <use href={sprite + `#icon-checkbox-error`} />
                        </svg>
                        {errors.password}
                      </MessageStyleError>
                    ) : touched.password ? (
                      <MessageStyleSuccess>
                        <svg width="16" height="16" fill="currentColor">
                          <use href={sprite + `#icon-checkbox-success`} />
                        </svg>
                        Success password
                      </MessageStyleSuccess>
                    ) : null}
                  </div>
                </WrapperInput>

                <ButtonSubmit type="submit">Sign Up</ButtonSubmit>

                <ReLink>
                  Already have an account?{' '}
                  <LinkStyle to="/signin">Sign In</LinkStyle>
                </ReLink>
              </StyledForm>
            )}
          </Formik>
        </div>
      </WrapperForm>
      <StatisticsSignUp />
    </Container>
  );
};

export default SignUpPage;
