import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { loginization, checkUser } from '../../redux/Authorization/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  WrapperDesktop,
  MainBlock,
  TitleSignIn,
  TextWelcome,
  FormikStyle,
  FormStyle,
  FieldStyle,
  ErrorMessageStyle,
  ButtonSubmit,
  ReLink,
  LinkStyle,
} from './SignInPage.styled';

const SignInPage = () => {
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

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <>
      <WrapperDesktop></WrapperDesktop>
      <MainBlock>
        <TitleSignIn>Sign In</TitleSignIn>
        <ToastContainer />
        <TextWelcome>
          Welcome! Please enter your credentials to login to the platform:
        </TextWelcome>
        <FormikStyle
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={handleSubmit}
        >
          <FormStyle autoComplete="on">
            <div>
              <FieldStyle type="email" name="email" placeholder="Email" />

              <ErrorMessageStyle
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <FieldStyle
                type="password"
                name="password"
                placeholder="Password"
              />

              <ErrorMessageStyle
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <ButtonSubmit type="submit">Sign In</ButtonSubmit>
          </FormStyle>
        </FormikStyle>

        <ReLink>
          Don’t have an account? <LinkStyle to="/signup">Sign Up</LinkStyle>
        </ReLink>
      </MainBlock>
    </>
  );
};

export default SignInPage;
