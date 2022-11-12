import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Input,
  Label,
  Button,
  Error,
  VisibilityButton,
} from './AuthForms.styled';
import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required().min(7, 'Password is too short'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label htmlFor="email">
          Email
          <Input type="email" name="email" required />
          <ErrorMessage name="email" component={Error} />
        </Label>

        <Label htmlFor="password">
          Password
          <Input
            type={value.showPassword ? 'text' : 'password'}
            name="password"
            required
          />
          <ErrorMessage name="password" component={Error} />
          <VisibilityButton type="button" onClick={handleClickShowPassword}>
            {value.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
          </VisibilityButton>
        </Label>
        <Button type="submit">Log in</Button>
      </Form>
    </Formik>
  );
};
