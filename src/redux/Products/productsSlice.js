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
    info: {},
    products: [],
    category: [],
    list: [],
    isLoading: false,
    isAddModalOpen: false,
    isSuccessModalOpen: false,
    filter: {
      search: '',
      category: '',
      recomended: '',
    },
    error: null,
  },

  reducers: {
    setInfo: (state, { payload }) => {
      state.info = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setAddModalOpen: state =>
      void (state.isAddModalOpen = !state.isAddModalOpen),
    setSuccessModal: state =>
      void (state.isSuccessModalOpen = !state.isSuccessModalOpen),
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
export const addModalReducer = productsSlice.actions.setAddModalOpen;
export const successModalReducer = productsSlice.actions.setSuccessModal;
export const infoReducer = productsSlice.actions.setInfo;
