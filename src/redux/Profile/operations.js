import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com';
const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export const currenntUserProfile = createAsyncThunk(
  'users/profile',
  async (token, thunkAPI) => {
    setAuthHeader(token);
    try {
      const response = await axios.get('/users/current');

      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
