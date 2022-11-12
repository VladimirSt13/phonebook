import { Formik } from 'formik';
import { Form, Input, Label, Button } from './RegisterForm.styled';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  // const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    // dispatch(
    //   register({
    //     name: values.name,
    //     email: values.email,
    //     password: values.password,
    //   })
    // );
    actions.resetForm(initialValues);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <Label htmlFor="name">
          Username
          <Input type="text" name="name" required />
        </Label>
        <Label htmlFor="email">
          Email
          <Input type="text" name="email" required />
        </Label>
        <Label htmlFor="password">
          Password
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};
