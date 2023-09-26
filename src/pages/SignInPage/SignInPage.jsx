import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { loginization, checkUser } from '../../redux/Authorization/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const style = {
    paddingTop: '200px',
  };

  return (
    <div style={style}>
      <h2>Sign In</h2>
      <ToastContainer />

      <p>Welcome! Please enter your credentials to login to the platform:</p>

      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="on">
          <div>
            <Field type="email" name="email" placeholder="Email" />

            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <Field type="password" name="password" placeholder="Password" />

            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit">Sign In</button>
          <p>
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInPage;
