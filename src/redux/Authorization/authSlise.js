import { createSlice } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

import {
  register,
  loginization,
  logOut,
  refreshUser,
  updateUser,
  checkUser,
} from './operations';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// це для того щоб виводити помилки в тостах
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  //   toast.error(
  //     `${action.payload}` === 'Network Error'
  //       ? `${action.payload}`
  //       : 'Something went wrong. Check your data and try again',
  //   );
};

const initialState = {
  user: { email: null, name: null },
  token: null,
  isLoaggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
  bodyData: { bodyData: null },
};

const authSlise = createSlice({
  name: 'auth',
  initialState: initialState,

  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoaggedIn = false;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(loginization.pending, handlePending)
      .addCase(loginization.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.bodyData = { ...state.bodyData, ...action.payload };
        if (state.bodyData.bodyData === null) {
          state.isLoaggedIn = false;
        } else {
          state.isLoaggedIn = true;
        }
      })

      .addCase(loginization.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, name: null };
        state.token = null;
        state.isLoaggedIn = false;
        state.bodyData = {};
        state.bodyData.bodyData = null;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log(action.payload);

        if (Object.keys(action.payload.bodyData) === 0) {
          state.bodyData = { ...action.payload, bodyData: null };
        } else {
          state.bodyData = action.payload;
        }

        if (action.payload.bodyData.bodyData !== null) state.isLoaggedIn = true;

        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.bodyData = action.payload;
        state.isLoaggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload;
      }),
});

export const authReduser = authSlise.reducer;
