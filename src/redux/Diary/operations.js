import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com';

export const addProductThunk = createAsyncThunk(
  'dairy/addProduct',
  async body => {
    const { productId, calories, amount } = body;
    const { data } = await axios.post('diary/addProduct', {
      productId,
      calories,
      amount,
    });
    console.log(data);
    return { data };
  },
);
