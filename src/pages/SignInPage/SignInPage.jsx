import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { loginization } from '../../redux/Authorization/operations';
// import { register } from 'Redux/Authorization/operations';

const SignInPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    // e.preventDefault();
    // const { name, email, password } = e.target.elements;
    console.log(values);

    // const jsonData = JSON.stringify({
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // });

    // dispatch(register(jsonData));

    dispatch(
      loginization({
        email: values.email,
        password: values.password,
      }),
    );
    action.resetForm();
  };

  const signUpSchema = object({
    email: string()
      .matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Invalid E-mail format')
      .required('Please input your E-mail!'),
    password: string().min(6).max(16).required(),
  });

  //початкове значення инпутів
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

      <p>Welcome! Please enter your credentials to login to the platform:</p>

      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="on">
          <div>
            <Field type="email" name="email" placeholder="Email" />
            {/* {errors.email && touched.email && (
                <div className="error-message">Please input your E-mail!</div>
              )} */}
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <Field type="password" name="password" placeholder="Password" />
            {/* {errors.password && touched.password && (
                <div className="error-message">Please input your password!</div>
              )} */}
            <ErrorMessage
              name="email"
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

// const SignInPage = () => {
//   return <div>SignInPage</div>;
// };

export default SignInPage;
