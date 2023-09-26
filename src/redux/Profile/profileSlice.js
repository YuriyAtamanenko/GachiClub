import { createSlice } from '@reduxjs/toolkit';
import { currenntUserProfile } from './operations';
import { initialState } from './initialState';

const handlePending = state => {
  state.isLoading = true;
};
const getCurrentUser = (state, action) => {
  state.isLoading = false;
  state.data = action.payload;

  const userParams = state.data.bodyData;

  if (Object.keys(userParams).length === 0) {
    state.data.bodyData = initialState.data.bodyData;
  }
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(currenntUserProfile.pending, handlePending)
      .addCase(currenntUserProfile.fulfilled, getCurrentUser)
      .addCase(currenntUserProfile.rejected, handleRejected),
});

export const profileReducer = profileSlice.reducer;
