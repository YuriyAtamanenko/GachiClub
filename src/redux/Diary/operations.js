import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com';

export const getDiaryThunk = createAsyncThunk(
  'diary/date',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(`diary/${date}`);
      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addProductThunk = createAsyncThunk(
  'dairy/addProduct',
  async body => {
    const { productId, calories, amount } = body;
    const { data } = await axios.post('diary/addProduct', {
      productId,
      calories,
      amount,
    });
    return { data };
  },
);
