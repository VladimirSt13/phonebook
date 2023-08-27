import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Button, VisibilityButton } from './AuthForms.styled';
import { register as regUser } from 'redux/auth/operations';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Password is too short').required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
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
    resolver: yupResolver(registerSchema),
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
      regUser({
        name: data.name,
        email: data.email,
        password: data.password,
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
      <label htmlFor="name">
        Username
        <input
          type="text"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
      </label>
      <div style={{ height: 20, color: 'red' }}>
        {errors.name && <span>{errors.name?.message || 'Error !'}</span>}
      </div>

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
      <div style={{ height: 20, color: 'red' }}>
        {errors.password && (
          <span>{errors.password?.message || 'Error !'}</span>
        )}
      </div>

      <Button type="submit" disabled={!isValid}>
        Register
      </Button>
    </form>
  );
};
