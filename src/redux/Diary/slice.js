import { createSlice } from '@reduxjs/toolkit';

import {
  addProductThunk,
  getDiaryThunk,
  removeExerciseThunk,
  removeProductThunk,
} from './operations';

const getActivities = (state, action) => {
  state.products = action.payload.data.products;
  console.log(action.payload.data.exercises);
  state.exercises = action.payload.data.exercises;
};
export const diarySlice = createSlice({
  name: 'diary',
  initialState: {
    products: [],
    exercises: [],
    burnedCalories: null,
    consumedCalories: null,
    consumedProducts: [],
    createdAt: null,
    date: null,
    doneExercises: [],
    sportDuration: null,
    owner: null,
    updatedAt: null,
    _id: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getDiaryThunk.pending, pending)
      .addCase(getDiaryThunk.fulfilled, getActivities)
      .addCase(getDiaryThunk.rejected, rejected)
      .addCase(addProductThunk.pending, pending)
      .addCase(addProductThunk.fulfilled, addDiaryFulfilled)
      .addCase(addProductThunk.rejected, rejected)
      .addCase(removeProductThunk.pending, pending)
      .addCase(removeProductThunk.fulfilled, deleteElementFulfilled)
      .addCase(removeProductThunk.rejected, rejected)
      .addCase(removeExerciseThunk.pending, pending)
      .addCase(removeExerciseThunk.fulfilled, deleteElementFulfilled)
      .addCase(removeExerciseThunk.rejected, rejected),
});

function pending(state) {
  state.isLoading = true;
}
function rejected(state) {
  state.isLoading = false;
}

function addDiaryFulfilled(state, { payload }) {
  const { newProduct } = payload;

  if (newProduct) {
    const newElement = {
      ...payload.consumedProducts.pop(),
      product: payload.newProduct,
    };
    state.consumedProducts = [...state.consumedProducts, newElement];
  }
  state.consumedCalories = payload.consumedCalories;
  state.isLoading = false;
}
function deleteElementFulfilled(state, { payload }) {
  const { productToRemove, exerciseToRemove, data } = payload;
  if (productToRemove) {
    state.products = [...state.products].filter(
      ({ _id }) => _id !== productToRemove,
    );
  }
  if (exerciseToRemove) {
    state.exercises = [...state.exercises].filter(
      ({ _id }) => _id !== exerciseToRemove,
    );
  }
  state.burnedCalories = data.burnedCalories;
  state.consumedCalories = data.calories;
  state.sportDuration = data.time;
  state.isLoading = false;
}
export const diaryReducer = diarySlice.reducer;
