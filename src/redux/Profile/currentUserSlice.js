import { createSlice } from '@reduxjs/toolkit';
import { currenntUserProfile, updateUserProfile } from './operations';
import { initialState } from './initialState';

const handlePending = state => {
  state.isLoading = true;
};
const handlePendingUpdate = state => {
  state.isLoadingUpdate = true;
};

const complateUpdate = (state, action) => {
  state.isLoadingUpdate = false;
  state.memo = action.payload;
};

const handleRejectedUpdate = (state, action) => {
  state.isLoadingUpdate = false;
  state.errorUpdate = action.payload;
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

const currentUserSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(currenntUserProfile.pending, handlePending)
      .addCase(currenntUserProfile.fulfilled, getCurrentUser)
      .addCase(currenntUserProfile.rejected, handleRejected)
      .addCase(updateUserProfile.pending, handlePendingUpdate)
      .addCase(updateUserProfile.fulfilled, complateUpdate)
      .addCase(updateUserProfile.rejected, handleRejectedUpdate),
});

export const profileReducer = currentUserSlice.reducer;
