import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com/';

const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const cleanAuthHeader = () =>
  (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', user);
      setAuthHeader(response.data.token);
      console.log('Текущий user1 в register', response);
      console.log('Текущий user в register', response.data);
      // console.log('Текущий status в register', response.status);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const loginization = createAsyncThunk(
  'auth/loginization',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);
      setAuthHeader(response.data.token);
      if (response.data.token) {
        await thunkAPI.dispatch(refreshUser());
      }

      console.log('Текущий user1 в loginization', response);
      // console.log('Текущий user в loginization', response.data);
      // console.log('Текущий status в loginization', response.status);

  
     


      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    cleanAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const checkUser = createAsyncThunk(
  'auth/checkUser',

  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.get('/users/current', {
        params: { email, password },
      });

      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        return null;
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (!persistedToken) {
        throw new Error('No token available');
      }

      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      // console.log('Запрос о текущем пользователе в operations', res);
      // console.log('Текущий user в operations', res.data);
      return res.data; // Возвращаем данные о пользователе
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    // console.log('updateUser в updateUser');
    // console.log('userData в updateUser', userData);
    try {
      // console.log('try updateUser');

      const response = await axios.post('/users/params', userData);

      console.log('userData в updateUser', userData);
      console.log('response в updateUser', response);
      console.log('response.data в updateUser', response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
