import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://fitness-for-all-back-end.onrender.com';
export const getExercisesList = createAsyncThunk(
  'exercises/list',
  async ({ bodyPartTitle, equipmentTitle, targetTitle }, thunkAPI) => {
    try {
      const { data } = await axios.get('/exercises', {
        params: {
          bodyPart: bodyPartTitle,
          equipment: equipmentTitle,
          target: targetTitle,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const getCategories = createAsyncThunk(
  'exercises/category',
  async (_, thunkAPI) => {
    try {
      const response = await Promise.all([
        axios.get('/exercises/bodyparts'),
        axios.get('/exercises/muscules'),
        axios.get('/exercises/equipments'),
      ]);
      const [bodyparts, muscules, equipments] = response.map(e => e.data);
      const categories = { bodyparts, muscules, equipments };
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const addExerciseToDiary = createAsyncThunk(
  'diary/addExercise',
  async ({ exerciseId, duration, calories }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/diary/addExercise', {
        exerciseId,
        duration,
        calories,
      });
      return { ...data, newExercise: { exerciseId, duration, calories } };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
