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
      // const response = await axios.post('/users/signup', user);
      setAuthHeader(response.data.token);
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

      // await thunkAPI.dispatch(refreshUser());
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

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, thunkAPI) => {
//     const { token } = thunkAPI.getState().auth;
//     console.log('refreshUser');
//     token && setAuthHeader(token);
//     console.log('refreshUser-1');

//     try {
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, thunkAPI) => {
//     // Reading the token from the state via getState()
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       // If there is no token, exit without performing any request
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     console.log('refreshUser');
//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

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
      console.log('Запрос о текущем пользователе в operations', res);
      console.log('Текущий user в operations', res.data);
      return res.data; // Возвращаем данные о пользователе
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    console.log('updateUser в updateUser');
    console.log('userData в updateUser', userData);
    try {
      console.log('try updateUser');
      const response = await axios.post('/users/params', userData); // маршрут для обновления данных пользователя
      console.log('userData в try updateUser', userData);
      console.log('response.data');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
