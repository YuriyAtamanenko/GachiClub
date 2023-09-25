import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com/';

export const getAllProducts = createAsyncThunk(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/products');
      return data.allProducts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
