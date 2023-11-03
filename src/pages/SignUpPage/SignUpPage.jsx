import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Statistics from '../../components/Statistics/Statistics';

import AuthForm from '../../components/AuthForm/AuthForm';
import AuthFormButton from '../../components/AuthFormButtons/AuthFormButtons';

import AuthFormLink from '../../components/AuthFormLink/AuthFormLink';

import {
  Container,
  WrapperDesktop,
  WrapperForm,
  Title,
  Text,
  WrapperText,
  StatisticsWrapper,
} from './SignUpPage.styled';

import { register } from '../../redux/Authorization/operations';

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
          <Title>Sign Up</Title>

          <Text>
            Thank you for your interest in our platform. To complete the
            registration process, please provide us with the following
            information.
          </Text>
        </WrapperText>

        <div>
          <AuthForm
            nameIsShown={true}
            handleSubmit={handleSubmit}
            toglePassword={toglePassword}
            passwordInput={passwordInput}
            isPassword={isPassword}
          >
            <AuthFormButton text="Sign Up" type="submit" />
            <AuthFormLink
              text="Already have an account?"
              textLink="Sign In"
              to="/signin"
            />
          </AuthForm>
        </div>
      </WrapperForm>
      <StatisticsWrapper>
        {/* <StatisticsSignUp /> */}
        <Statistics />
      </StatisticsWrapper>
    </Container>
  );
};

export default SignUpPage;
