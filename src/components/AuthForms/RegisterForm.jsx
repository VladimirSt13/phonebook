import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  Input,
  Label,
  Button,
  Error,
  VisibilityButton,
} from './AuthForms.styled';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
const initialValues = {
  name: '',
  email: '',
  password: '',
};

const loginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required().min(7, 'Password is too short'),
});

export const RegisterForm = () => {
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
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm(initialValues);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">
          Username
          <Input type="text" name="name" required />
          <ErrorMessage name="name" component={Error} />
        </Label>

        <Label htmlFor="email">
          Email
          <Input type="text" name="email" required />
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

        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};
