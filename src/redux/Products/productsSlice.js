import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getCategories } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    category: [],
    list: [],
    isLoading: false,
    filter: {
      search: '',
      category: '',
      recomended: '',
    },
    error: null,
  },

  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: {
    [getAllProducts.pending]: handlePending,
    [getAllProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    },
    [getAllProducts.rejected]: handleRejected,
    [getCategories.pending]: handlePending,
    [getCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.category = action.payload;
    },
    [getCategories.rejected]: handleRejected,
  },
});

export const productsReducer = productsSlice.reducer;
export const filterReducer = productsSlice.actions.setFilter;
