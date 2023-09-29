import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
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
  WrapperMessange,
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

  const handleSubmit = async (values, action) => {
    console.log(values);

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

          if (
            loginResult.payload.bodyData !== null &&
            Object.keys(loginResult.payload.bodyData).length !== 0
          ) {
            navigate('/diary');
          } else {
            navigate('/params');
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

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: handleSubmit,
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
                    <FieldStyle
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={e => {
                        formik.handleChange(e);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="FieldStyle"
                    />

                    <div>
                      {formik.touched.email ? (
                        formik.errors.email ? (
                          <MessageStyleError>
                            <svg width="16" height="16" fill="currentColor">
                              <use href={sprite + `#icon-checkbox-error`} />
                            </svg>{' '}
                            {formik.errors.email}
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

                  <WrapperPassword>
                    <PasswordField
                      id="password"
                      type={passwordInput}
                      placeholder="Password"
                      name="password"
                      className={
                        formik.touched.password && formik.errors.password
                          ? 'error-input'
                          : formik.touched.password
                          ? 'success-input'
                          : 'default-input'
                      }
                      onChange={e => {
                        formik.handleChange(e);
                        
                      }}
                      value={formik.values.password}
                      
                      onBlur={e => {
                        handleBlur(e);
                        formik.handleBlur(e);
                      }}
                      data-touch={touched.password && !errors.password}
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

                    <WrapperMessange className="messege">
                      {formik.touched.password ? (
                        formik.errors.password ? (
                          <MessageStyleError className="error-icon">
                            <svg width="16" height="16" fill="currentColor">
                              <use href={sprite + `#icon-checkbox-error`} />
                            </svg>{' '}
                            {formik.errors.password}
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
                    </WrapperMessange>

                    
                  </WrapperPassword>
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
