import { createSlice } from '@reduxjs/toolkit';

import { addProductThunk } from './operations';

export const diarySlice = createSlice({
  name: 'diary',
  initialState: {
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
