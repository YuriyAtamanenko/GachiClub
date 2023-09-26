import { createSlice } from '@reduxjs/toolkit';
import { currenntUserProfile, updateUserProfile } from './operations';
import { initialState } from './initialState';
import {
  complateUpdate,
  getCurrentUser,
  handlePending,
  handlePendingUpdate,
  handleRejected,
  handleRejectedUpdate,
} from './function';

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
