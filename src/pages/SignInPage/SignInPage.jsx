import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Formik,
  // useFormik
} from 'formik';
import { object, string } from 'yup';
import { loginization, checkUser } from '../../redux/Authorization/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StatisticsSignIn from '../SignInPage/StatisticsSignIn/StatisticsSignIn';
import sprite from '../../images/sprite.svg';
import ButtonInput from '../../components/ButtonInput/ButtonInput';

import {
  WrapperDesktop,
  FieldStyle,
  ButtonSubmit,
  ReLink,
  LinkStyle,
  Container,
  WrapperForm,
  Title,
  Text,
  WrapperText,
  StyledForm,
  WrapperInput,
  MessageStyleError,
  MessageStyleSuccess,
  WrapperPassword,
  PasswordField,
} from './SignInPage.styled';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignInPage = () => {
  const [isPassword, setIsPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('password');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bodyData = useSelector(state => state.auth.bodyData);

  useEffect(() => {
    if (Object.keys(bodyData).length > 1) {
      navigate('/params');
    }
  });

  const handleSubmit = async (values, action) => {
    console.log('handleSubmit', values, action);
    try {
      const user = await checkUser(values.email, values.password);

      if (user !== null) {
        const loginResult = await dispatch(
          loginization({
            email: values.email,
            password: values.password,
          }),
        );

        if (loginResult.error) {
          toast.error('Invalid email or password');
        } else {
          action.resetForm();

          if (loginResult.payload.bodyData.bodyData === undefined) {
            navigate('/params');
          } else {
            navigate('/diary');
          }
        }
      } else {
        toast.error('Invalid data');
      }
    } catch (error) {
      if (error.message === 'Server error') {
        toast.error('Server error');
      }
    }
  };

  const signUpSchema = object({
    email: string()
      .matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Invalid E-mail format')
      .required('Please input your E-mail!'),
    password: string().min(6).max(16).required(),
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
    <Container className="Container">
      <WrapperDesktop className="Photo"></WrapperDesktop>
      <WrapperForm className="section">
        <WrapperText className="text-conteiner">
          <Title>Sign In</Title>
          <ToastContainer />
          <Text className="text-p">
            Welcome! Please enter your credentials to login to the platform:
          </Text>
        </WrapperText>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
          >
            {({ handleBlur, touched, errors }) => (
              <StyledForm autoComplete="on" className="StyledForm">
                <WrapperInput>
                  <div>
                    <div>
                      <div>
                        <FieldStyle
                          type="email"
                          name="email"
                          placeholder="Email"
                          onBlur={handleBlur}
                        />
                      </div>

                      {touched.email ? (
                        errors.email ? (
                          <MessageStyleError>
                            <svg width="16" height="16" fill="currentColor">
                              <use href={sprite + `#icon-checkbox-error`} />
                            </svg>{' '}
                            {errors.email}
                          </MessageStyleError>
                        ) : (
                          <MessageStyleSuccess>
                            <svg width="16" height="16" fill="currentColor">
                              <use href={sprite + `#icon-checkbox-success`} />
                            </svg>{' '}
                            Success name
                          </MessageStyleSuccess>
                        )
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <WrapperPassword>
                      <div>
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
                      </div>
                    </WrapperPassword>

                    {touched.password ? (
                      errors.password ? (
                        <MessageStyleError className="error-icon">
                          <svg width="16" height="16" fill="currentColor">
                            <use href={sprite + `#icon-checkbox-error`} />
                          </svg>{' '}
                          {errors.password}
                        </MessageStyleError>
                      ) : (
                        <MessageStyleSuccess>
                          <svg width="16" height="16" fill="currentColor">
                            <use href={sprite + `#icon-checkbox-success`} />
                          </svg>{' '}
                          Success password
                        </MessageStyleSuccess>
                      )
                    ) : null}
                  </div>
                </WrapperInput>

                <ButtonSubmit type="submit">Sign In</ButtonSubmit>

                <ReLink>
                  Don’t have an account?{' '}
                  <LinkStyle to="/signup">Sign Up</LinkStyle>
                </ReLink>
              </StyledForm>
            )}
          </Formik>
        </div>
      </WrapperForm>
      <StatisticsSignIn />
    </Container>
  );
};

export default SignInPage;
