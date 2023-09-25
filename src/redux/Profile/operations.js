import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { token } = JSON.parse(localStorage.getItem('persist:auth'));
axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const currenntUserProfile = createAsyncThunk(
  'users/profile',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  'users/update',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('/users/cupdate');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
