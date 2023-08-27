import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as Yup from 'yup';
import { Button, VisibilityButton } from './AuthForms.styled';
import { useForm } from 'react-hook-form';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';

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
  const [state, setState] = useState({
    showPassword: false,
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const onSubmit = data => {
    dispatch(
      logIn({
        email: data.email.trim(),
        password: data.password.trim(),
      })
    );
    reset();
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '320px',
        border: '1px solid #b7b7bf',
      }}
    >
      <label htmlFor="email">
        Email
        <input
          type="text"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
      </label>
      <div style={{ height: 20, color: 'red' }}>
        {errors.email && <span>{errors.email?.message || 'Error !'}</span>}
      </div>

      <label htmlFor="password" style={{ position: 'relative' }}>
        Password
        <input
          type={state.showPassword ? 'text' : 'password'}
          {...register('password')}
        />
        <VisibilityButton type="button" onClick={handleClickShowPassword}>
          {state.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
        </VisibilityButton>
      </label>

      <Button type="submit" disabled={!isValid}>
        Login
      </Button>
    </form>
  );
};
