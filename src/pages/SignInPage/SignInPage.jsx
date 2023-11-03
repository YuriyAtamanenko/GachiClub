import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { loginization, checkUser } from '../../redux/Authorization/operations';

import Statistics from '../../components/Statistics/Statistics';

import AuthForm from '../../components/AuthForm/AuthForm';
import AuthFormButton from '../../components/AuthFormButtons/AuthFormButtons';
import AuthFormLink from '../../components/AuthFormLink/AuthFormLink';

import {
  WrapperDesktop,
  Container,
  WrapperForm,
  Title,
  Text,
  WrapperText,
  StatisticsWrapper,
} from '../SignUpPage/SignUpPage.styled';

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
          <Title>Sign In</Title>
          <ToastContainer />
          <Text>
            Welcome! Please enter your credentials to login to the platform:
          </Text>
        </WrapperText>
        <div>
          <AuthForm
            nameIsShown={false}
            handleSubmit={handleSubmit}
            toglePassword={toglePassword}
            passwordInput={passwordInput}
            isPassword={isPassword}
          >
            <AuthFormButton text="Sign In" type="submit" />
            <AuthFormLink
              text="Don’t have an account?"
              textLink="Sign Up"
              to="/signup"
            />
          </AuthForm>
        </div>
      </WrapperForm>
      <StatisticsWrapper>
        <Statistics />
      </StatisticsWrapper>
    </Container>
  );
};

export default SignInPage;
