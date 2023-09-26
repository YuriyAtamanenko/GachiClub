import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com/';

export const getAllProducts = createAsyncThunk(
  'products/getAll',
  async ({ search, category, recommended }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/products', {
        params: {
          title: search,
          category,
          recommended,
        },
      });
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

      return res.data.allCategories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const getProductsList = createAsyncThunk(
//   `filter/getProducts`,
//   async (searchParams, thunkAPI) => {
//     try {
//       const res = await axios.get(`/products?${searchParams}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
