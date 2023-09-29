import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik'; // Добавьте useFormik
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StatisticsSignUp from './StatisticsSignUp/StatisticsSignUp';
import sprite from '../../images/sprite.svg';
import ButtonInput from '../../components/ButtonInput/ButtonInput';

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
  WrapperMessange,
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
        if (bodyData === null || Object.keys(bodyData).length === 0) {
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
    name: string().required('Please input your name!'),
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
                    <StyledField
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={e => {
                        formik.handleChange(e);
                        // handleInputChange(e);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />

                    <div>
                      {formik.touched.name ? (
                        formik.errors.name ? (
                          <MessageStyleError>
                            <svg width="16" height="16" fill="currentColor">
                              <use href={sprite + `#icon-checkbox-error`} />
                            </svg>{' '}
                            {formik.errors.name}
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
                    <StyledField
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? 'error-input'
                          : formik.touched.email
                          ? 'success-input'
                          : 'default-input'
                      }
                      onChange={e => {
                        formik.handleChange(e);
                        // handleInputChange(e);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      // className={setHoverColorState}
                    />

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
                          Success email
                        </MessageStyleSuccess>
                      )
                    ) : null}
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
