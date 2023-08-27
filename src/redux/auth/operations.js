import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'src/api/authService';
import { toast } from 'react-hot-toast';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = authService.register(credentials);

      toast.success('Registration successful');
      return response;
    } catch (error) {
      toast.error(`Register: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await authService.login(credentials);

      toast.success('LogIn successful');
      return response;
    } catch (error) {
      toast.error(`Log in error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authService.logout();
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
      const response = await authService.getCurrentUser(persistedToken);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
