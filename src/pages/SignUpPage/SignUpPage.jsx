// import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { register } from '../../Redux/Authorization/operations';
// import { register } from 'Redux/Authorization/operations';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, action) => {
    // e.preventDefault();
    // const { name, email, password } = e.target.elements;
    console.log(values);

    // const jsonData = JSON.stringify({
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // });

    // dispatch(register(jsonData));
    try {
      await dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      );
      action.resetForm();
    } catch (error) {
      console.error('Server error:', error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Server Error: ${error.response.data.message}`);
      } else {
        alert('Server Error: Something went wrong');
      }
    }
  };

  const signUpSchema = object({
    name: string().required(),
    email: string()
      // .email()
      .matches(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Invalid E-mail format')
      .required('Please input your E-mail!'),
    password: string()
      // .min(6)
      // .max(16)
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/,
        'Password must contain at least 6 letters and 1 number',
      )

      // .matches(
      //   /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      //   'Password must contain at least 6 letters and 1 number',
      // )
      .required('Please input your password'),
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
      <h2>Sign Up</h2>

      <p>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <div>
              <Field type="text" name="name" placeholder="Name" />
              {errors.name && touched.name && (
                <div className="error-message">Please input your name!</div>
              )}
              {/* <ErrorMessage name="name" component="div" /> */}
            </div>

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
                name="password"
                component="div"
                className="error-message"
                // style={{ color: 'red', fontSize: '14px' }}
              />
            </div>

            <button type="submit">Sign Up</button>
            <p>
              Already have account? <Link to="/signin">Sign In</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
