import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'contacts',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getAllProducts.pending]: handlePending,
    [getAllProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    },
    [getAllProducts.rejected]: handleRejected,
  },
});

export const productsReducer = productsSlice.reducer;
