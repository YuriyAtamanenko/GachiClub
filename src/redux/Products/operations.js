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

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/products/category');
      return res.data[0].categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getProductsList = createAsyncThunk(
  `filter/getProducts`,
  async (searchParams, thunkAPI) => {
    try {
      const res = await axios.get(`/products?${searchParams}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
