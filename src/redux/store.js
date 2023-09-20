import { configureStore } from '@reduxjs/toolkit';
import { exercisesReducer } from './reducer';
export const store = configureStore({
  reducer: exercisesReducer,
});
