import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledButton } from '../../components/ContactForm/ContactFormStyled';
import {
  Error,
  FormWrapper,
  Label,
  Input,
} from '../RegistrationPage/RegistrationPageStyled';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(7, 'Password is too short')
    .max(16, 'Password is too long'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success('Log In successfully'))
      .catch(() => toast.error('Something went wrong...Try again.'));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormWrapper>
          <Label htmlFor="login">
            Email
            <Input type="email" name="email" />
            <Error name="email" component="div" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input type="password" name="password" />
            <Error name="password" component="div" />
          </Label>
          <StyledButton type="submit">Log In</StyledButton>
        </FormWrapper>
      </Form>
    </Formik>
  );
};

export default LoginPage;
