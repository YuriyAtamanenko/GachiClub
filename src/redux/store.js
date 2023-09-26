import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { middleware } from './rootReducer';
import { reducer } from './rootReducer';

export const store = configureStore({
  reducer,
  middleware,
});

export const persistor = persistStore(store);
