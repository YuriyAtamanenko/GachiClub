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
  'diary/addProduct',
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
export const removeProductThunk = createAsyncThunk(
  'diary/deleteProduct',
  async ({ date, productToRemove }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`diary/removeProduct`, {
        data: { date, productToRemove },
      });
      return { productToRemove: productToRemove, data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const removeExerciseThunk = createAsyncThunk(
  'diary/deleteExercise',
  async ({ date, exerciseToRemove }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`diary/removeExercise`, {
        data: { date, exerciseToRemove },
      });
      return { exerciseToRemove: exerciseToRemove, data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
