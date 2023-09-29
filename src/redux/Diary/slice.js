import { createSlice } from '@reduxjs/toolkit';

import { addProductThunk, getDiaryThunk } from './operations';

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
    owner: null,
    updatedAt: null,
    _id: null,
  },
  extraReducers: builder =>
    builder

      .addCase(getDiaryThunk.fulfilled, getActivities)

      .addCase(addProductThunk.pending, pending)
      .addCase(addProductThunk.fulfilled, addDiaryFulfilled)
      .addCase(addProductThunk.rejected, rejected),
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

export const diaryReducer = diarySlice.reducer;
