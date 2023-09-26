import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com';

export const addProductThunk = createAsyncThunk(
  'dairy/addProduct',
  async body => {
    const { date, product } = body;
    const { data } = await axios.post('dairy/addProduct', {
      date,
      product,
    });
    return { data };
  },
);
