import { Formik } from 'formik';
import { Form, Input, Label, Button } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <Label htmlFor="email">
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label htmlFor="password">
          Password
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Log in</Button>
      </Form>
    </Formik>
  );
};
