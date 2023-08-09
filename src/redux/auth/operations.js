import { createAsyncThunk } from '@reduxjs/toolkit';
import { server, token } from 'api/apiService';
import { toast } from 'react-hot-toast';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await server.post('/users/signup', credentials);
      console.log('file: operations.js:12  res:', res);

      token.set(res.data.user.token);
      toast.success('Registration successful');
      return res.data;
    } catch (error) {
      toast.error(`Register: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    console.log('file: operations.js:25  credentials:', credentials);

    try {
      const res = await server.post('/users/login', credentials);
      console.log('file: operations.js:29  res:', res);

      token.set(res.data.token);
      toast.success('LogIn successful');
      return res.data;
    } catch (error) {
      toast.error(`Log in error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await server.post('/users/logout');
    token.unset();
    toast.success('LogOut successfull');
  } catch (error) {
    toast.error(`Log out error: ${error.message}`);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const res = await server.get('/users/current');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
