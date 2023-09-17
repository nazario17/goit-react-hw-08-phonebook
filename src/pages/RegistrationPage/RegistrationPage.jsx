import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledButton } from '../../components/ContactForm/ContactFormStyled';
import { Error, FormWrapper, Label, Input } from './RegistrationPageStyled';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Username is too short')
    .required('Username is required'),
  email: yup.string().required().email(),
  password: yup
    .string()
    .min(7, 'Password is too short')
    .max(16, 'Password is too long')
    .required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
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
          <Label htmlFor="name">
            Username
            <Input type="text" name="name" />
            <Error name="name" component="div" />
          </Label>
          <Label htmlFor="email">
            Email
            <Input type="email" name="email" />
            <Error name="email" component="div" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input type="password" name="password" />
            <Error name="password" component="div" />
          </Label>
          <StyledButton type="submit">Registration</StyledButton>
        </FormWrapper>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
